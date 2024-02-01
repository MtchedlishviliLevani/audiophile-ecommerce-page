import { ReactNode } from "react";
interface ContainerProps {
    children: ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="container px-[5%] sm:px-[0]  sm:max-w-[90%] xl:max-w-[1110px] 2xl:max-w-[1300px]  mx-auto">
            {children}
        </div>
    );
};

export default Container;
