import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { endOfWeek, format, getMonth, getWeek, startOfWeek } from "date-fns";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { FonCodeResponse } from "../models/fund-analysis";
import { FonInfo } from "../models/fund-analysis-info";

const FON_TYPES = [
  { label: "Memkul Kıymet Yatırım Fonları", value: 1 },
  { label: "Emeklilik Yatırım Fonları", value: 2 },
  { label: "Menkul Kıymet Yatırım Ortaklıkları", value: 3 },
  { label: "Tüm Yatırım Ortaklıkları", value: 4 },
  { label: "Gayrimenkul Yatırım Ortaklıkları", value: 7 },
  { label: "Risk Sermayesi Yatırım Ortaklıkları", value: 8 },
];

const DISPLAY_PERIODS = ["Günlük", "Haftalık", "Aylık"];
enum PERIODS {
  DAYLY = "Günlük",
  WEEKLY = "Haftalık",
  MONTHLY = "Aylık",
}

@Injectable({
  providedIn: "root",
})
export class FundAnalysisService {
  apiUrl = environment.apiUrl;

  private fonTypeSubject = new BehaviorSubject<{}>(FON_TYPES);
  fonTypes$ = this.fonTypeSubject.asObservable();

  private fonCodeSubject = new BehaviorSubject<FonCodeResponse[]>(null);
  fonCodes$ = this.fonCodeSubject.asObservable();

  private displayPeriodSubject = new BehaviorSubject<string[]>(DISPLAY_PERIODS);
  displayPeriods$ = this.displayPeriodSubject.asObservable();

  private chartDataSubject = new BehaviorSubject<FonInfo[]>(null);
  chartData$ = this.chartDataSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getFonInfoForCode({
    fonType,
    fonCode,
    startDate,
    endDate,
    period,
  }: {
    fonType: number;
    fonCode: string;
    startDate: Date;
    endDate: Date;
    period: string;
  }): Observable<FonInfo[]> {
    return this.httpClient
      .get<FonInfo[]>(
        this.apiUrl +
        "PortfoyDegerleri/" +
        fonCode +
        "/" +
        fonType +
        "/" +
        format(startDate, "yyyy-MM-dd") +
        "/" +
        format(endDate, "yyyy-MM-dd")
      )
      .pipe(
        map((data) => {
          if (data) {
            data.forEach((it) => {
              it.Tarih = new Date(it.Tarih);
            });
          }



          if (period === PERIODS.DAYLY) {
            data.forEach(
              (item) => (item.label = format(item.Tarih, "dd-MM-yyyy"))
            );

            return data;
          }

          if (period === PERIODS.WEEKLY) {
            const weeks = data.reduce((acc, curr) => {
              const dateWeek = getWeek(curr.Tarih);
              acc[dateWeek] = {
                label: `${format(startOfWeek(curr.Tarih), "dd-MM")} - ${format(
                  endOfWeek(curr.Tarih),
                  "dd-MM"
                )}`,
                Tarih: curr.Tarih,
                FonKodu: curr.FonKodu,
                FonUnvani: curr.FonUnvani,
                FonTipi: curr.FonTipi,
                FonTuru: curr.FonTuru,
                ToplamDeger: curr.ToplamDeger + acc[dateWeek]?.ToplamDeger || 0,
                BirimPayDegeri: curr.BirimPayDegeri + acc[dateWeek]?.BirimPayDegeri || 0,
                DolasimdakiPaySayisi: curr.DolasimdakiPaySayisi + acc[dateWeek]?.DolasimdakiPaySayisi || 0,
                YatirimciSayisi: curr.YatirimciSayisi + acc[dateWeek]?.YatirimciSayisi || 0,
                BankaBonosu: curr.BankaBonosu + acc[dateWeek]?.BankaBonosu || 0,
                Diger: curr.Diger + acc[dateWeek]?.Diger || 0,
                DevletTahvili: curr.DevletTahvili + acc[dateWeek]?.DevletTahvili || 0,
                DovizOdemeliBono: curr.DovizOdemeliBono + acc[dateWeek]?.DovizOdemeliBono || 0,
                DovizOdemeliTahvil: curr.DovizOdemeliTahvil + acc[dateWeek]?.DovizOdemeliTahvil || 0,
                Eurobond: curr.Eurobond + acc[dateWeek]?.Eurobond || 0,
                FinansmanBonosu: curr.FinansmanBonosu + acc[dateWeek]?.FinansmanBonosu || 0,
                FonKatilmaBelgesi: curr.FonKatilmaBelgesi + acc[dateWeek]?.FonKatilmaBelgesi || 0,
                GayrimenkulSertifikasi: curr.GayrimenkulSertifikasi + acc[dateWeek]?.GayrimenkulSertifikasi || 0,
                HazineBonosu: curr.HazineBonosu + acc[dateWeek]?.HazineBonosu || 0,
                HisseSenedi: curr.HisseSenedi + acc[dateWeek]?.HisseSenedi || 0,
                KamuDisBorclanmaAraci: curr.KamuDisBorclanmaAraci + acc[dateWeek]?.KamuDisBorclanmaAraci || 0,
                KamuKiraSertifikasi: curr.KamuKiraSertifikasi + acc[dateWeek]?.KamuKiraSertifikasi || 0,
                KatilimHesabi: curr.KatilimHesabi + acc[dateWeek]?.KatilimHesabi || 0,
                KiymetliMaden: curr.KiymetliMaden + acc[dateWeek]?.KiymetliMaden || 0,
                OzelSektorKiraSertifikasi: curr.OzelSektorKiraSertifikasi + acc[dateWeek]?.OzelSektorKiraSertifikasi || 0,
                OzelSektorTahvili: curr.OzelSektorTahvili + acc[dateWeek]?.OzelSektorTahvili || 0,
                TersRepo: curr.TersRepo + acc[dateWeek]?.TersRepo || 0,
                TPP: curr.TPP + acc[dateWeek]?.TPP || 0,
                TurevAraci: curr.TurevAraci + acc[dateWeek]?.TurevAraci || 0,
                VarligaDayaliMenkulKiymet: curr.VarligaDayaliMenkulKiymet + acc[dateWeek]?.VarligaDayaliMenkulKiymet || 0,
                VadeliMevduat: curr.VadeliMevduat + acc[dateWeek]?.VadeliMevduat || 0,
                YabanciBorclanmaAraci: curr.YabanciBorclanmaAraci + acc[dateWeek]?.YabanciBorclanmaAraci || 0,
                YabanciHisseSenedi: curr.YabanciHisseSenedi + acc[dateWeek]?.YabanciHisseSenedi || 0,
                YabanciMenkulKiymet: curr.YabanciMenkulKiymet + acc[dateWeek]?.YabanciMenkulKiymet || 0,
              };

              return acc;
            }, {});

            return Object.values(weeks) as FonInfo[];
          }

          if (period === PERIODS.MONTHLY) {
            const months = data.reduce((acc, curr) => {
              const dateMonth = getMonth(curr.Tarih);
              acc[dateMonth] = {
                label: `${format(curr.Tarih, "MMM")}`,
                Tarih: curr.Tarih,
                FonKodu: curr.FonKodu,
                FonUnvani: curr.FonUnvani,
                FonTipi: curr.FonTipi,
                FonTuru: curr.FonTuru,
                ToplamDeger: curr.ToplamDeger + acc[dateMonth]?.ToplamDeger || 0,
                BirimPayDegeri: curr.BirimPayDegeri + acc[dateMonth]?.BirimPayDegeri || 0,
                DolasimdakiPaySayisi: curr.DolasimdakiPaySayisi + acc[dateMonth]?.DolasimdakiPaySayisi || 0,
                YatirimciSayisi: curr.YatirimciSayisi + acc[dateMonth]?.YatirimciSayisi || 0,
                BankaBonosu: curr.BankaBonosu + acc[dateMonth]?.BankaBonosu || 0,
                Diger: curr.Diger + acc[dateMonth]?.Diger || 0,
                DevletTahvili: curr.DevletTahvili + acc[dateMonth]?.DevletTahvili || 0,
                DovizOdemeliBono: curr.DovizOdemeliBono + acc[dateMonth]?.DovizOdemeliBono || 0,
                DovizOdemeliTahvil: curr.DovizOdemeliTahvil + acc[dateMonth]?.DovizOdemeliTahvil || 0,
                Eurobond: curr.Eurobond + acc[dateMonth]?.Eurobond || 0,
                FinansmanBonosu: curr.FinansmanBonosu + acc[dateMonth]?.FinansmanBonosu || 0,
                FonKatilmaBelgesi: curr.FonKatilmaBelgesi + acc[dateMonth]?.FonKatilmaBelgesi || 0,
                GayrimenkulSertifikasi: curr.GayrimenkulSertifikasi + acc[dateMonth]?.GayrimenkulSertifikasi || 0,
                HazineBonosu: curr.HazineBonosu + acc[dateMonth]?.HazineBonosu || 0,
                HisseSenedi: curr.HisseSenedi + acc[dateMonth]?.HisseSenedi || 0,
                KamuDisBorclanmaAraci: curr.KamuDisBorclanmaAraci + acc[dateMonth]?.KamuDisBorclanmaAraci || 0,
                KamuKiraSertifikasi: curr.KamuKiraSertifikasi + acc[dateMonth]?.KamuKiraSertifikasi || 0,
                KatilimHesabi: curr.KatilimHesabi + acc[dateMonth]?.KatilimHesabi || 0,
                KiymetliMaden: curr.KiymetliMaden + acc[dateMonth]?.KiymetliMaden || 0,
                OzelSektorKiraSertifikasi: curr.OzelSektorKiraSertifikasi + acc[dateMonth]?.OzelSektorKiraSertifikasi || 0,
                OzelSektorTahvili: curr.OzelSektorTahvili + acc[dateMonth]?.OzelSektorTahvili || 0,
                TersRepo: curr.TersRepo + acc[dateMonth]?.TersRepo || 0,
                TPP: curr.TPP + acc[dateMonth]?.TPP || 0,
                TurevAraci: curr.TurevAraci + acc[dateMonth]?.TurevAraci || 0,
                VarligaDayaliMenkulKiymet: curr.VarligaDayaliMenkulKiymet + acc[dateMonth]?.VarligaDayaliMenkulKiymet || 0,
                VadeliMevduat: curr.VadeliMevduat + acc[dateMonth]?.VadeliMevduat || 0,
                YabanciBorclanmaAraci: curr.YabanciBorclanmaAraci + acc[dateMonth]?.YabanciBorclanmaAraci || 0,
                YabanciHisseSenedi: curr.YabanciHisseSenedi + acc[dateMonth]?.YabanciHisseSenedi || 0,
                YabanciMenkulKiymet: curr.YabanciMenkulKiymet + acc[dateMonth]?.YabanciMenkulKiymet || 0,
              };

              return acc;
            }, {});

            return Object.values(months) as FonInfo[];
          }
        }),
        tap((data) => {
          this.chartDataSubject.next(data);
        })
      );
  }

  getFonCode(fonType: number): Observable<FonCodeResponse[]> {
    return this.httpClient
      .get<FonCodeResponse[]>(this.apiUrl + "Funds/" + fonType)
      .pipe(
        tap((data) => {
          this.fonCodeSubject.next(data);
        })
      );
  }
}
