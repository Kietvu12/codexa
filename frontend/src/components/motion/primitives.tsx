import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from 'motion/react'
import type { ReactNode } from 'react'

export const easeOut = [0.22, 1, 0.36, 1] as const

/** Chạy lại animation mỗi lần phần tử vào viewport (scroll lên/xuống). */
export const viewportOnce = {
  once: false,
  amount: 0.2,
  margin: '0px 0px -60px 0px',
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

type RevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  delay?: number
  variant?: 'fadeUp' | 'fadeIn' | 'fadeRight' | 'fadeLeft' | 'scaleIn'
}

const variantMap = {
  fadeUp,
  fadeIn,
  fadeRight,
  fadeLeft,
  scaleIn,
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'fadeUp',
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variantMap[variant]}
      transition={{ duration: 0.55, ease: easeOut, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type EnterProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  delay?: number
  variant?: 'fadeUp' | 'fadeIn' | 'fadeDown' | 'scaleIn'
}

const enterVariantMap = {
  fadeUp,
  fadeIn,
  fadeDown,
  scaleIn,
}

export function Enter({
  children,
  className,
  delay = 0,
  variant = 'fadeUp',
  ...props
}: EnterProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={enterVariantMap[variant]}
      transition={{ duration: 0.6, ease: easeOut, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = HTMLMotionProps<'div'> & {
  children: ReactNode
}

export function Stagger({ children, className, ...props }: StaggerProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerEnter({ children, className, ...props }: StaggerProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, ...props }: StaggerProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={staggerItem} {...props}>
      {children}
    </motion.div>
  )
}

export function MotionEnterItem({ children, className, ...props }: StaggerProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={staggerItem} {...props}>
      {children}
    </motion.div>
  )
}

export { motion }
