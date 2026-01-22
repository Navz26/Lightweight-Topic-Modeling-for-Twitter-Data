import React, { useCallback } from 'react';
import ReactFlow, {
    Minimap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge
} from 'react-flow-renderer';

const initialDevices = [
   {
    id: '1',
    name: 'Router',
    ip: '192.168.0.1',
    connections: ['2','3']
   },
   {
    id: '2',
    name: 'laptop',
    ip: '192.168.0.102',
    connections: []
   },
   {
    ip: '3',
    name: 'printer',
    ip: '192.168.0.102',
    connections: []
   }
];

const NetworkDiagram = () => {
    const nodeColor = '#1e3a8a';

    const nodes = initial devices.map((devices, index) => ({
        id: devices.id,
        data: {label: '${device.name}\n${device.ip}' },
        position: { x: index * 200, y: 100 },
        style: {
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: 10,
            background: nodeColor,
            color: 'white'
        }

    }
    
   
))
} ;

const edges = initialDevices.flatmap(device =>
    device.conncetions.map(connId => ({
        id: 'e${devices.id}-${connId}',
        source: device.id,
        target: connId,
        animated: true,
        style: {stroke: '#10b981'}

    }))
);

const [nodesState, setNodes, onNodesChange] = useNodesState(nodes);
const [edgesState, setEdges, onEdgesChange] = useEdgesstate(edges);

const onConnect =  useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
);

return (
    <div style = {{width: '100%', height: '600px' }}
)