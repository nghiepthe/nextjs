import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

export default function StructureTreeView() {
    const JSON = {
        id: "000",
        name: "Police HCM City",
        children: [
            {
                id: "001",
                name: "District 1",
                children: [
                    {
                        id: "002",
                        name: "Ward Pham Ngu Lao",
                        children: [{
                            id: "012",
                            name: "Quarter 6",
                            children: []
                        }]
                    }
                ]
            },
            {
                id: "007",
                name: "District 2",
                children: [
                    {
                        id: "003",
                        name: "Ward Pham Ngu Lao",
                        children: []
                    }
                ]
            },
            {
                id: "008",
                name: "District 3",
                children: [
                    {
                        id: "004",
                        name: "Ward Pham Ngu Lao",
                        children: []
                    }
                ]
            },
            {
                id: "009",
                name: "District 4",
                children: [
                    {
                        id: "005",
                        name: "Ward Pham Ngu Lao",
                        children: []
                    }
                ]
            },
            {
                id: "010",
                name: "District 5",
                children: [
                    {
                        id: "006",
                        name: "Ward Pham Ngu Lao",
                        children: []
                    }
                ]
            }
        ]
    }
    const [expanded, setExpanded] = React.useState<string[]>([]);
    const [selected, setSelected] = React.useState<string[]>([]);

    const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
        setSelected(nodeIds);
    };

    const handleExpandClick = () => {
        setExpanded((oldExpanded) =>
            oldExpanded.length === 0 ? ['0', '1', '2'] : [],
        );
    };

    const handleSelectClick = () => {
        setSelected((oldSelected) =>
            oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] : [],
        );
    };

    const ViewItem = ({ element }) => {
        console.log(element)
        if (!element?.children.length) return null
        return (
            <TreeItem nodeId={element?.name} label={element?.name}>
                {
                    element?.children?.map((element) => {
                        return (
                            <ViewItem element={element} />
                        )
                    })
                }
            </TreeItem>
        )
    }

    const TreeViewItem = ({ element }) => {
        return (
            <TreeView
                aria-label="controlled"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                multiSelect
            >
                <ViewItem element={element} />

                {/* <TreeItem nodeId={JSON.id} label={JSON.name}>
                    {
                        JSON.children?.map((element) => {
                            return (
                                <TreeItem nodeId={element.id} label={element.name} >
                                    {element.children?.map((element) => {
                                        return (
                                            <TreeItem nodeId={element.id} label={element.name} >
                                                {element.children?.map((element) => {
                                                    return (
                                                        <TreeItem nodeId={element.id} label={element.name} >
                                                        </TreeItem>
                                                    )
                                                })}
                                            </TreeItem>
                                        )
                                    })}
                                </TreeItem>
                            )
                        }
                        )
                    }
                </TreeItem> */}
            </TreeView>
        )
    }

    return (
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
            <Box sx={{ mb: 1 }}>
                <Button onClick={handleExpandClick} variant='contained' color='info' sx={{ width: 150, marginRight: 1 }}>
                    {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
                </Button>
                <Button onClick={handleSelectClick} variant='contained' color='info' sx={{ width: 150, marginRight: 1 }}>
                    {selected.length === 0 ? 'Select all' : 'Unselect all'}
                </Button>
            </Box>
            <TreeViewItem element={JSON} />
        </Box>
    );
}