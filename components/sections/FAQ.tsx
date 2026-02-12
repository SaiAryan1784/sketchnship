'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
    {
        question: "Who can participate?",
        answer: "Designers, developers, and anyone passionate about creating! Whether you're a student, a professional, or a hobbyist, if you love to build, you're welcome here."
    },
    {
        question: "Do I need a team?",
        answer: "You can participate solo or in teams of up to 4 people. Don't have a team? No worries! We'll have a team formation session at the beginning of the event."
    },
    {
        question: "What does it cost?",
        answer: "Nothing! Sketch-N-Ship is completely free for all admitted participants. We'll provide food, drinks, and a place to hack."
    },
    {
        question: "What should I bring?",
        answer: "Bring your laptop, charger, and any hardware you want to hack on. If you're staying overnight, bring a sleeping bag and toiletries."
    },
    {
        question: "Who owns the IP?",
        answer: "You do! The team that creates the project owns all intellectual property rights. We just want to see what you build."
    },
    {
        question: "Can I start working before the event?",
        answer: "No, all code and design work must be created during the hackathon. You can bring ideas and sketches, but no pre-written code."
    }
]

export const FAQ = () => {
    return (
        <section className="py-32 w-full bg-background-dark border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-designer-secondary to-developer-secondary">Questions</span>
                    </h2>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={`item-${index}`} className="border-b border-white/10 px-4 group data-[state=open]:bg-white/5 transition-colors rounded-lg">
                                    <AccordionTrigger className="text-xl font-heading text-white hover:no-underline group-hover:text-designer-primary transition-colors py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-lg pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
