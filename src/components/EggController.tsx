import Egg from "@/components/Egg"
import { RigidBody } from "@react-three/rapier";

export default function EggController(props: any) {

    return (
        <RigidBody scale={[1, 1, 1]} position={[1, 2, 1]} rotation={[0, -Math.PI / 2, 0]}>
            <Egg scale={[2, 2, 2]} position={[1, 1, 5]} />
        </RigidBody>
    );
}
