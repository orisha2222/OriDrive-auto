export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        const { message } = req.body;

        if (!message || !message.trim()) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        const response = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization":
                        `Bearer ${process.env.OPENAI_API_KEY}`
                },

                body: JSON.stringify({

                    model: "gpt-5.6-luna",

                    instructions: `
You are VROOM, the AI assistant for OriDrive Auto.

OriDrive Auto is an automotive accessories business
based in Addis Ababa, Ethiopia.

Your job is to help customers:

- Find products
- Understand products
- Understand prices
- Ask about delivery
- Navigate the OriDrive Auto website
- Contact OriDrive Auto

Be friendly, concise and professional.

Never invent:
- Product availability
- Prices
- Discounts
- Delivery fees
- Customer reviews
- Stock quantities

If you don't know something, clearly say that
you don't have that information.

Use ETB when discussing Ethiopian prices.

Current known products:

BYD Magnetic Phone Holder:
2,000 ETB

Premium Key Fob:
2,500 ETB

Starlight Charger:
5,000 ETB

5-in-1 Charging Cable:
3,400 ETB

Magnetic Phone Holder:
2,499 ETB

Car Interior Decor:
1,500 ETB

Do not claim that an order has been placed.
Do not claim payment was received.
Do not pretend to be a human employee.

You are VROOM, a small automotive AI assistant.
`,

                    input: message

                })

            }
        );

        const data = await response.json();

        if (!response.ok) {

            console.error(data);

            return res.status(500).json({
                error: "AI request failed"
            });

        }

        return res.status(200).json({
            reply: data.output_text
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: "Server error"
        });

    }
}
