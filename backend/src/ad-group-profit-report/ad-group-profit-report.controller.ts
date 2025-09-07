/**
 * File: ad-group-profit-report/ad-group-profit-report.controller.ts
 * Mục đích: REST API cho báo cáo lợi nhuận nhóm quảng cáo.
 */
import { Controller, Get, Query } from '@nestjs/common';
import { AdGroupProfitReportService } from './ad-group-profit-report.service';
import { AdGroupProfitFilterDto } from './dto/ad-group-profit-filter.dto';

@Controller('ad-group-profit-report')
export class AdGroupProfitReportController {
  constructor(private readonly adGroupProfitReportService: AdGroupProfitReportService) {}

  // GET /ad-group-profit-report
  // Trả về cấu trúc giống product-profit-report: { adGroups, dates, data, summary }
  @Get()
  async getAdGroupProfitReport(@Query() filterDto: AdGroupProfitFilterDto) {
    return this.adGroupProfitReportService.getAdGroupProfitReport(filterDto);
  }

  // GET /ad-group-profit-report/years
  @Get('years')
  async getAvailableYears() {
    const years = await this.adGroupProfitReportService.getAvailableYears();
    return { years };
  }

  // GET /ad-group-profit-report/summary
  @Get('summary')
  async getSummary(@Query() filterDto: AdGroupProfitFilterDto) {
    const report = await this.adGroupProfitReportService.getAdGroupProfitReport(filterDto);
    return {
      summary: report.summary,
      adGroupCount: report.adGroups.length,
      dateRange: {
        from: report.dates[0] || null,
        to: report.dates[report.dates.length - 1] || null,
        totalDays: report.dates.length
      }
    };
  }
}
