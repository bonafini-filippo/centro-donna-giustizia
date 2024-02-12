const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="mt-20 mx-2" >
            <div className="max-w-[900px] m-auto">
                {children}
            </div>
        </section>
    );
};

export default AuthLayout;