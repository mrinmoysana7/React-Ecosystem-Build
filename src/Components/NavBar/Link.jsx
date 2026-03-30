const Link = ({route}) => {
    return (
        <li className='px-2 lg:mr-10  hover:bg-amber-200 rounded-lg'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;