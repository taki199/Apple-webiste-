import { PerspectiveCamera, View } from "@react-three/drei"


const ModelView = (index,groupRef,gsapType,controlRef,setRotationState,size,item) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full border-2 border-red-400 absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3}/>
      <PerspectiveCamera makeDefault position={[0,0,4]}/>
   </View>
  )
}

export default ModelView