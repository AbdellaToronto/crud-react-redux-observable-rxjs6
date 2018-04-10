import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

interface Props {
  list: any[];
}

// Todo: figure out withStyles Typing
export const TodoList = withStyles(({palette}) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  } as React.CSSProperties,
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  } as React.CSSProperties,
}))<Props>(({classes, ...props}) =>
  (
    <List className={classes.root} subheader={<li />}>
      {props.list.map(item => (
        <ListItem
          key={item}
          dense={true}
          button={true}
        >
          <Checkbox
            checked={false}
            tabIndex={-1}
          />
          <ListItemText primary={`Line item ${item}`} />
        </ListItem>
      ))}
    </List>
  )
);
