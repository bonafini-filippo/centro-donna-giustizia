const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <section className="relative mt-10 md:max-w-[900px]  md:pt-10 container my-3 lg:my-28 gap-10 md:gap-20 h-full " >
                <div className="my-auto">
                    {children}
                </div>
            </section>
        </div>

    );
};

export default AuthLayout;