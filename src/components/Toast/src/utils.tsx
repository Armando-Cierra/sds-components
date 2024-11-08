import React from 'react';
import { toast } from 'react-toastify';
import uniqid from 'uniqid';
import { Telicon } from '../../Telicon';
import type { ToastTriggerProps } from './types';

export const toastID = uniqid('sds_toast_');
export const toastSubtleID = uniqid('sds_toast_subtle_');

export const toastTrigger = {
  default: ({
    icon = 'info-circle--fill',
    content,
    position = 'top-right',
    hideIcon = false,
  }: ToastTriggerProps) => {
    toast.info(
      <div className="sds_toast_container">
        {!hideIcon && (
          <Telicon className="sds_toast_container_icon" iconName={icon} />
        )}
        <div className="sds_toast_container_content">{content}</div>
      </div>,
      {
        containerId: toastID,
        position,
      }
    );
  },
  success: ({
    icon = 'check-circle--fill',
    content,
    position = 'top-right',
    hideIcon = false,
  }: ToastTriggerProps) => {
    toast.success(
      <div className="sds_toast_container">
        {!hideIcon && (
          <Telicon
            className="sds_toast_container_icon sds_toast_container_icon--success"
            iconName={icon}
          />
        )}
        <div className="sds_toast_container_content">{content}</div>
      </div>,
      {
        containerId: toastID,
        position,
      }
    );
  },
  warning: ({
    icon = 'warning-triangle--fill',
    content,
    position = 'top-right',
    hideIcon = false,
  }: ToastTriggerProps) => {
    toast.warning(
      <div className="sds_toast_container">
        {!hideIcon && (
          <Telicon
            className="sds_toast_container_icon sds_toast_container_icon--warning"
            iconName={icon}
          />
        )}
        <div className="sds_toast_container_content">{content}</div>
      </div>,
      {
        containerId: toastID,
        position,
      }
    );
  },
  danger: ({
    icon = 'warning-octagon--fill',
    content,
    position = 'top-right',
    hideIcon = false,
  }: ToastTriggerProps) => {
    toast.error(
      <div className="sds_toast_container">
        {!hideIcon && (
          <Telicon
            className="sds_toast_container_icon sds_toast_container_icon--danger"
            iconName={icon}
          />
        )}
        <div className="sds_toast_container_content">{content}</div>
      </div>,
      {
        containerId: toastID,
        position,
      }
    );
  },
};

export const toastSubtleTrigger = ({
  content,
  position = 'bottom-center',
  icon,
}: ToastTriggerProps) => {
  toast(
    <div className="sds_toast_container">
      {icon && <Telicon className="sds_toast_container_icon" iconName={icon} />}
      <div className="sds_toast_container_content">{content}</div>
    </div>,
    {
      containerId: toastSubtleID,
      position,
    }
  );
};
