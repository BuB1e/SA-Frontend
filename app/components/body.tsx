export default function Body({...props}) {
    return(
        <div className="bg-white w-auto h-svh justify-center items-center overflow-hidden">
            {props.children}
        </div>
    );
}