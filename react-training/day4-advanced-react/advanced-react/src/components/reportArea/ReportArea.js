import React from 'react';
import PropTypes from 'prop-types';
import ActionReport from '../actionReport/ActionReport';
import CustomScroll from 'react-custom-scroll';

const ReportArea = props => (
  <div className="report-area">
    <CustomScroll keepAtBottom heightRelativeToParent="100%">
      <div className="actions-container">
        {props.userActions.map((action, index) => (
          <ActionReport
            action={action}
            key={index}
            isLast={index === props.userActions.length - 1}
            />))}
      </div>
    </CustomScroll>
  </div>

);

ReportArea.propTypes = {
  userActions: PropTypes.array.isRequired
};

export default ReportArea;
