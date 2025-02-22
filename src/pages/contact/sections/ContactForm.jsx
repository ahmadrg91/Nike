import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import FloatingLabelInput from "../../../components/FloatingLabelInput";

const ContactForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const onErrors = errors => console.log(errors);

    return (
        <div className="flex  justify-center gap-24 m-24">
            <div className="flex flex-col justify-center items-center flex-1">
                <h1 className="font-palanquin text-4xl font-bold">We <span className="text-coral-red">Love To Hear</span> From You !</h1>
                <p className="mt-4 text-center break-words font-montserrat text-lg leading-normal text-slate-gray">Have questions or feedback? Reach out to us—we're here to help! Whether you have inquiries, suggestions, or just want to say hello, we’d love to connect with you.</p>
            </div>
            <div className="flex flex-1 mt-24">
                <form onSubmit={handleSubmit(onSubmit, onErrors)} className="flex flex-col gap-2 w-full items-center justify-start shadow-3xl pb-12 px-8 rounded-lg">
                    <h2 className="text-3xl font-palanquin font-bold text-coral-red my-6 w-full">Let's Get In Touch !</h2>                    
                    <FloatingLabelInput 
                        type="text"
                        name="name"
                        label="Name"
                        validation={{ maxLength: 10 }}
                        watch={watch}
                        register={register}
                        errors={errors.name}
                    />
                    <FloatingLabelInput 
                        type="email"
                        name="email"
                        label="Email"
                        validation={{ required: true }}
                        watch={watch}
                        register={register}
                    />
                    <FloatingLabelInput 
                        type="text"
                        name="text"
                        label="Message"
                        validation={{ minLength: 10 }}
                        watch={watch}
                        register={register}
                        isTextarea={true}
                    />
                    <button type="submit" className="w-full border bg-coral-red text-white text-lg font-montserrat py-3 rounded-lg" >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;