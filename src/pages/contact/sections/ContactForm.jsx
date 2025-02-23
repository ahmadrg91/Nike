import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import FloatingLabelInput from "../../../components/FloatingLabelInput";

const ContactForm = () => {

    const { register, handleSubmit, watch, formState: { errors, isValid, touchedFields }, reset } = useForm({
        mode: "onTouched",
    });
    const onSubmit = (data) => {
        alert(`Thankyou ${data.name + ' '}for reaching out to us. We will get back to you soon on ${data.email}`);
        reset();
    }

    return (
        <div className="flex flex-1 flex-col items-center md:flex-row gap-8 md:gap-24">
            <div className="flex flex-col text-center justify-center items-center flex-1">
                <h1 className="font-palanquin text-4xl font-bold">We <span className="text-coral-red">Love To Hear</span> From You !</h1>
                <p className="mt-4 break-words font-montserrat text-lg leading-normal text-slate-gray">Have questions or feedback? Reach out to us—we're here to help! Whether you have inquiries, suggestions, or just want to say hello, we’d love to connect with you.</p>
            </div>
            <div className="flex flex-1 w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 md:gap-4 w-full items-center justify-start shadow-3xl pb-12 px-5 md:px-8 rounded-lg">
                    <h2 className="text-3xl font-palanquin font-bold text-coral-red my-6 w-full">Let's Get In Touch !</h2>                    
                    <FloatingLabelInput 
                        type="text"
                        name="name"
                        label="Name"
                        validation={{ maxLength: {value: 25, message: "Name can contain at most 20 characters"} }}
                        watch={watch}
                        register={register}
                        errors={errors.name}
                    />
                    <FloatingLabelInput 
                        type="email"
                        name="email"
                        label="Email"
                        validation={{ required: {value: true, message: "Please enter your Email"} }}
                        watch={watch}
                        register={register}
                        errors={errors.email}
                    />
                    <FloatingLabelInput 
                        type="text"
                        name="message"
                        label="Message"
                        validation={{ minLength: {value: 10, message: "The message must at least be 10 characters long"}, required: {value: true, message: "Please enter a message"} }}
                        watch={watch}
                        register={register}
                        isTextarea={true}
                        errors={errors.message}
                    />
                    <button disabled={!isValid} type="submit" className="w-full border disabled:opacity-75 disabled:cursor-not-allowed bg-coral-red text-white text-lg font-montserrat py-3 rounded-lg" >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;