import './style.css';

function Masonry({ data }) {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {data.map((item, index) => (
                <div
                    key={index}
                    className='bg-cover bg-top h-[300px] rounded-xl'
                    style={{ backgroundImage: `url(${item.image})` }}
                />
            ))}
        </div >
    );
}

export default Masonry;
