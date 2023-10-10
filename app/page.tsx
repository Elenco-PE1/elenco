"use client"
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/faqs";
import { SignUpButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<main className="bg-foreground text-secondary min-h-screen w-full relative flex flex-col">
			<Navbar />
			<section className="w-full h-full flex items-center justify-center overflow-hidden">
				<div className="flex flex-col justify-center w-full p-[55px]">
					<h1 className="text-8xl font-extrabold tracking-wide">Elenco</h1>
					<p className="text-xl pr-[20px]"> Empowering students to collaborate and innovate seamlessly on project ideas</p>
					<SignUpButton>
					<Button variant={'ghost'} size={'lg'} className="border-[3px] w-fit px-7 text-xl font-bold mt-[30px] hover:bg-white hover:text-primary">Get Started for Free</Button>
					</SignUpButton>
				</div>

				<div className="overflow-hidden w-full  h-screen">
					<iframe width={'800px'} height={'800px'} className="z-[-1]" src="https://lottie.host/?file=df4ecc63-b78c-4da0-85d7-32686cb9e8f2/JXPQeZk0LI.json"></iframe>
				</div>
			</section>

			<section id="about-us" className="w-full h-screen flex flex-col gap-5 items-center justify-center px-[40px]">
				<h1 className="text-6xl font-semibold tracking-wide mb-[80px]">About</h1>
				<p className="px-[80px] text-xl text-center">
					At Elenco, we are dedicated to fostering creativity and innovation by providing a dynamic and interactive platform for students and teams to collaborate on project ideas. We believe that the best ideas are often the result of collective effort, and that's why Elenco was born.
				</p>
				<p className="px-[80px] text-xl text-center">
				 Our mission is to make the collaborative journey easier and more efficient for everyone, from students working on school projects to researchers tackling complex challenges and entrepreneurs bringing their startup ideas to life. With Elenco, you'll discover a world where collaboration knows no bounds.
				</p>

				<ul className="list-inside list-disc mt-[40px] flex gap-[25px]">
					<li className="font-[200] text-sm">Team Dashboard</li>
					<li className="font-[200] text-sm">Collaborative Note-Taking</li>
					<li className="font-[200] text-sm">Change Tracking</li>
					<li className="font-[200] text-sm">Backlinks</li>
					<li className="font-[200] text-sm">Graphical Visualization</li>
					<li className="font-[200] text-sm">Notifications</li>
				</ul>
			</section>
 
			<section id="faq" className="w-full h-full flex flex-col gap-5 items-center justify-center px-[40px]">
				<h1 className="text-6xl font-semibold tracking-wide mt-[80px] mb-[60px]">FAQs</h1>
				<Accordion type="single" collapsible className="w-full px-[40px]">
					{faqs.map(({ques, ans}, id) => (
						<AccordionItem value={`faq${id}`}>
							<AccordionTrigger className="text-xl">{ques}</AccordionTrigger>
							<AccordionContent className="text-xl">{ans}</AccordionContent>
						</AccordionItem>
					))}
				
				</Accordion>
			</section>

			<div id="contact-us" className="w-full h-fit flex flex-col items-center justify-center p-[80px]">
				<h1 className="text-6xl font-semibold tracking-wide mb-[50px]">Contact</h1>
				<p className="text-xl">Have some queries, drop us a mail</p>
				<p className="text-xl">@contact.elenco@gmail.com</p>
			</div>

			<Footer />
		</main>
	);
}
