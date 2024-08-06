import { motion } from 'framer-motion'
import { cn } from '../../../utils/classNames'

type BarProgressProps = {
    progress: number
}

const BarProgress = ({ progress }: BarProgressProps) => {
    return (
        <div className="bg-custom-white w-28 flex items-center px-2 justify-start relative sm:w-32 md:w-56 h-7 rounded-full">
            <motion.div
                className={cn(
                    'bg-custom-dark-navy rounded-full',
                    progress === 0 ? 'h-0 p-0' : 'h-3.5 p-1'
                )}
                style={{ width: `${progress}%` }}
                initial={{ width: '100%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
        </div>
    )
}

export default BarProgress
