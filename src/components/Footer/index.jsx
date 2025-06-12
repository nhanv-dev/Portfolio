import { personalInfo } from '../../data';

export default function Footer() {
    return (
        <footer className='py-6 border-t border-gray-900'>
            <div className="flex flex-col md:flex-row gap-3 container justify-between">
                <p className="text-darkText font-bold text-[0.75rem] uppercase tracking-[2px]">
                    @2025. Personal portfolio
                </p>
                <p className="text-darkText font-bold text-[0.75rem] uppercase tracking-[2px]">
                    Developed by
                    <a href={personalInfo.link.facebook} target="_blank" rel="noreferrer" className="text-primary"> Tran Thanh Nhan</a>
                </p>
            </div>
        </footer>
    )
}