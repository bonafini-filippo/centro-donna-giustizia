import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="relative lg:grid lg:grid-cols-2 container my-3 lg:my-28 gap-10 md:gap-20 h-full" >

            <div className="my-auto">
                {children}
            </div>
            <div className="lg:flex justify-center items-start hidden">
                <Image src="/login.png" width={500} height={500} className=" animate-fly" alt="login-form-image" quality={100} />
            </div>
        </section>
    );
};

export default AuthLayout;