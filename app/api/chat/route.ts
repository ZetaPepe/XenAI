import { NextResponse } from "next/server"

const systemMessage = {
  role: "system" as const,
  content: `You are XenAI, the first AI agent model on XLayer Chain. You are knowledgeable about:
  - Blockchain technology and the XLayer Chain ecosystem
  - The XenAI token and its utility
  - AI and machine learning concepts
  - Cryptocurrency and DeFi
  - Your role as a pioneering AI agent in the blockchain space
  
  Always maintain your identity as XenAI and be helpful, informative, and engaging. Keep responses concise but informative.`,
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages array is required" }, { status: 400 })
    }

    // Check for OpenAI API key
    const openaiApiKey = process.env.OPENAI_API_KEY

    if (!openaiApiKey) {
      console.error("OpenAI API key not found in environment variables")
      return NextResponse.json(
        {
          error: "OpenAI API key not configured. Please add your API key to environment variables.",
          success: false,
          errorType: "missing_key",
        },
        { status: 500 },
      )
    }

    // Validate API key format
    if (!openaiApiKey.startsWith("sk-") || openaiApiKey.length < 20) {
      console.error("Invalid OpenAI API key format")
      return NextResponse.json(
        {
          error: "Invalid OpenAI API key format. Please check your API key.",
          success: false,
          errorType: "invalid_format",
        },
        { status: 500 },
      )
    }

    console.log("Making request to OpenAI API...")

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [systemMessage, ...messages],
        max_tokens: 800,
        temperature: 0.7,
        stream: false,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("OpenAI API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      })

      if (response.status === 401) {
        // Check for specific error types
        const errorMessage = errorData?.error?.message || ""

        if (errorMessage.includes("account_deactivated") || errorMessage.includes("deactivated")) {
          return NextResponse.json(
            {
              error:
                "Your OpenAI account has been deactivated. Please check your email from OpenAI for more information, or create a new account at platform.openai.com",
              success: false,
              errorType: "account_deactivated",
            },
            { status: 401 },
          )
        } else if (errorMessage.includes("insufficient_quota") || errorMessage.includes("quota")) {
          return NextResponse.json(
            {
              error:
                "Your OpenAI account has exceeded its quota. Please add billing information or upgrade your plan at platform.openai.com/account/billing",
              success: false,
              errorType: "quota_exceeded",
            },
            { status: 401 },
          )
        } else {
          return NextResponse.json(
            {
              error:
                "Invalid OpenAI API key. Please check your API key at https://platform.openai.com/account/api-keys",
              success: false,
              errorType: "invalid_key",
            },
            { status: 401 },
          )
        }
      } else if (response.status === 429) {
        return NextResponse.json(
          {
            error: "Rate limit exceeded. Please try again in a moment.",
            success: false,
            errorType: "rate_limit",
          },
          { status: 429 },
        )
      } else if (response.status === 403) {
        return NextResponse.json(
          {
            error: "Access denied. Please check your OpenAI account status and billing.",
            success: false,
            errorType: "access_denied",
          },
          { status: 403 },
        )
      } else {
        return NextResponse.json(
          {
            error: `OpenAI API error: ${response.status}. Please try again later.`,
            success: false,
            errorType: "api_error",
          },
          { status: 500 },
        )
      }
    }

    const data = await response.json()

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error("Invalid response structure from OpenAI:", data)
      return NextResponse.json(
        {
          error: "Invalid response from AI service",
          success: false,
          errorType: "invalid_response",
        },
        { status: 500 },
      )
    }

    const assistantMessage = data.choices[0].message

    console.log("OpenAI API call successful")

    return NextResponse.json({
      message: assistantMessage,
      success: true,
      usage: data.usage, // Optional: track token usage
    })
  } catch (error: any) {
    console.error("Error in chat API:", error)
    return NextResponse.json(
      {
        error: error.message || "Failed to process chat message. Please try again.",
        success: false,
        errorType: "network_error",
      },
      { status: 500 },
    )
  }
}
