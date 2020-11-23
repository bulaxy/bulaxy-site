import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function SimpleList({ content }) {
    return (
        <List>
            {content.map(item => {
                return (
                    <ListItem dense>
                        <ListItemText primary={item} />
                    </ListItem>
                )
            })}
        </List>
    );
}

