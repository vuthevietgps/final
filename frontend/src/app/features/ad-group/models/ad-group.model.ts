/**
 * File: features/ad-group/models/ad-group.model.ts
 * Mục đích: Khai báo interface/kiểu dữ liệu cho Nhóm Quảng Cáo (frontend).
 */

export type AdPlatform = 'facebook' | 'google' | 'ticktock';

export interface AdGroup {
  _id?: string;
  name: string;         // Tên nhóm quảng cáo
  adGroupId: string;    // ID nhóm quảng cáo (do người dùng nhập)
  productId: string;    // Tham chiếu sản phẩm
  agentId: string;      // Tham chiếu user (đại lý)
  adAccountId: string;  // Tham chiếu tài khoản quảng cáo
  platform: AdPlatform; // Nền tảng quảng cáo
  isActive: boolean;    // Trạng thái (đang hoạt động / đã tạm dừng)
  notes?: string;       // Ghi chú (không bắt buộc)
  
  // Populated fields (khi có populate từ backend)
  productName?: string;
  agentName?: string;
  adAccountName?: string;
  adAccountAccountId?: string;
  
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateAdGroup = Omit<AdGroup, '_id' | 'createdAt' | 'updatedAt'>;
export type UpdateAdGroup = Partial<CreateAdGroup>;
