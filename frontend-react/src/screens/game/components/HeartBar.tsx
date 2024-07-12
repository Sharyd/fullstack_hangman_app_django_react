import { HeartIcon } from '../../../components/icons/HeartIcon'
import { cn } from '../../../utils/classNames'

type HeartProps = {
    progress: number
}

const HeartBar = ({ progress }: HeartProps) => {
    return (
        <div className="flex gap-3 sm:gap-3 md:gap-6 items-center">
            <div className="bg-custom-white w-24 flex items-center px-2 justify-start relative sm:w-32 md:w-56 h-7 rounded-full">
                <div
                    className={cn(
                        'bg-custom-dark-navy rounded-full',
                        progress === 0 ? 'h-0 p-0' : 'h-3.5 p-1'
                    )}
                    style={{ width: `${progress}%` }}
                />
            </div>

            <HeartIcon />
        </div>
    )
}

export default HeartBar
