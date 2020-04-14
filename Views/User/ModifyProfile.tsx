import React from 'react';
import {INavProps} from '../../custom';
import NavHeader from '../../components/NavHeader';

class ModifyProfile extends React.PureComponent<INavProps> {
  componentDidMount(): void {
    console.log(this.props.history.location.state);
  }

  render(): React.ReactNode {
    return (
      <>
        <NavHeader title={'修改个人信息'} confirm={true} {...this.props} />
      </>
    );
  }
}

export default ModifyProfile;
