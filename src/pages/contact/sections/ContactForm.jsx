import Button from "../../../components/Button";

const ContactForm = () => {
    return (
        <div className="flex  justify-center gap-24 m-24">
            <div className="flex flex-col justify-center items-center flex-1">
                <h1 className="font-palanquin text-4xl text-coral-red font-bold">We Love To Hear From You !</h1>
                <p className="mt-4 text-center break-words font-montserrat text-lg leading-normal text-slate-gray">Have questions or feedback? Reach out to us—we're here to help! Whether you have inquiries, suggestions, or just want to say hello, we’d love to connect with you.</p>
            </div>
            <div className="flex flex-1 mt-24">
                <form className="flex flex-col gap-2 w-full items-center justify-start shadow-3xl pb-12 px-8 rounded-lg">
                    <h2 className="text-3xl font-palanquin font-bold text-coral-red my-6 w-full">Let's Get In Touch !</h2>
                    <input type="text" name="name" placeholder="NAME" className="border p-3 w-[95%]"/>
                    <input type="email" name="email" placeholder="EMAIL" className="border p-3 w-[95%]"/>
                    <textarea placeholder="Message" className="p-3 border w-[95%]" rows="10"></textarea>
                    <div className="mt-4 w-[95%]">
                        <Button label="Send Message" submit/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;