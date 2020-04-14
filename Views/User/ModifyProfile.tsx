import React from 'react';
import {Text} from 'react-native';
import {INavProps} from '../../custom';

class ModifyProfile extends React.PureComponent<INavProps> {
  componentDidMount(): void {
    console.log(this.props.history.location.state);
  }

  render(): React.ReactNode {
    return (
      <>
        <Text>hello world</Text>
      </>
    );
  }
}

export default ModifyProfile;
