export const SparklyEye = ({ sizeClass = "h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48" }) => (
  <img 
    src="/sparkly-eye-soft.svg" 
    className={`${sizeClass} select-none object-contain`} 
    alt="Sparkly Eye Logo"
    loading="eager" 
  />
);