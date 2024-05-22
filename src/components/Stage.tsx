import ComplexBox from "@/components/ComplexBox";

export default function Stage() {
    return (
        <>
            <ComplexBox colliders={false} scale={[15, 1, 15]} color='#a85105' />
            <ComplexBox
                colliders={false}
                scale={[0.5, 0.5, 15]}
                color='#6e3402'
                position={[-7.25, 0.75, 0]}
            />
            <ComplexBox
                colliders={false}
                scale={[0.5, 0.5, 15]}
                color='#6e3402'
                position={[7.25, 0.75, 0]}
            />

            <ComplexBox
                colliders={false}
                scale={[15, 0.5, 0.5]}
                color='#6e3402'
                position={[0, 0.75, 7.25]}
            />
            <ComplexBox
                colliders={false}
                scale={[15, 0.5, 0.5]}
                color='#6e3402'
                position={[0, 0.75, -7.25]}
            />
        </>
    );
}
