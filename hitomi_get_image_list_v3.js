// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 3772:
case 2028:
case 2604:
case 4086:
case 619:
case 1607:
case 3480:
case 1690:
case 2456:
case 1093:
case 3140:
case 3321:
case 3111:
case 149:
case 1508:
case 3482:
case 1558:
case 1692:
case 2055:
case 2464:
case 1345:
case 2675:
case 1467:
case 3930:
case 3703:
case 3753:
case 2230:
case 3919:
case 171:
case 2836:
case 3539:
case 2422:
case 3231:
case 3380:
case 2540:
case 3659:
case 814:
case 2306:
case 1870:
case 3382:
case 1265:
case 103:
case 3249:
case 1276:
case 877:
case 708:
case 2511:
case 139:
case 1983:
case 2914:
case 4001:
case 1638:
case 1917:
case 2364:
case 1445:
case 381:
case 1185:
case 3469:
case 893:
case 976:
case 2534:
case 1868:
case 2322:
case 1537:
case 908:
case 2110:
case 2771:
case 3079:
case 851:
case 1046:
case 3778:
case 370:
case 938:
case 375:
case 2665:
case 1550:
case 3379:
case 1502:
case 899:
case 413:
case 2064:
case 1909:
case 1698:
case 1552:
case 1067:
case 3082:
case 3518:
case 133:
case 1101:
case 2405:
case 3762:
case 4085:
case 3080:
case 3617:
case 2056:
case 3938:
case 3724:
case 3683:
case 2991:
case 2428:
case 3760:
case 156:
case 2238:
case 1186:
case 198:
case 2374:
case 421:
case 3479:
case 3194:
case 1446:
case 3599:
case 2896:
case 3813:
case 3992:
case 2761:
case 1045:
case 2548:
case 3388:
case 977:
case 180:
case 3957:
case 3990:
case 3789:
case 2207:
case 714:
case 1632:
case 2118:
case 143:
case 2827:
case 1033:
case 1862:
case 613:
case 808:
case 951:
case 3021:
case 3404:
case 2758:
case 2763:
case 2359:
case 689:
case 2017:
case 2680:
case 1014:
case 2708:
case 400:
case 2946:
case 214:
case 4078:
case 3842:
case 90:
case 1279:
case 2725:
case 405:
case 1615:
case 84:
case 3595:
case 467:
case 251:
case 3023:
case 4060:
case 3834:
case 70:
case 3622:
case 2459:
case 2621:
case 1170:
case 1288:
case 4089:
case 3304:
case 884:
case 2409:
case 667:
case 3277:
case 2977:
case 1740:
case 238:
case 1974:
case 354:
case 1491:
case 1571:
case 2812:
case 489:
case 1885:
case 3916:
case 311:
case 1734:
case 2737:
case 3293:
case 1955:
case 2810:
case 36:
case 3536:
case 2839:
case 1153:
case 3047:
case 2899:
case 4070:
case 2702:
case 2513:
case 466:
case 1584:
case 630:
case 3476:
case 1449:
case 3596:
case 2135:
case 3786:
case 2797:
case 2933:
case 3075:
case 580:
case 2688:
case 483:
case 94:
case 19:
case 1851:
case 3655:
case 445:
case 276:
case 3527:
case 543:
case 3605:
case 1801:
case 522:
case 208:
case 4003:
case 3245:
case 2143:
case 1616:
case 1981:
case 1269:
case 2483:
case 3054:
case 3004:
case 3628:
case 4053:
case 762:
case 2196:
case 299:
case 640:
case 3376:
case 1349:
case 1886:
case 73:
case 984:
case 3894:
case 1748:
case 1178:
case 3535:
case 3323:
case 1956:
case 115:
case 533:
case 666:
case 2818:
case 509:
case 784:
case 556:
case 2317:
case 1920:
case 1162:
case 3751:
case 2383:
case 2781:
case 3353:
case 112:
case 1926:
case 2061:
case 724:
case 454:
case 196:
case 760:
case 27:
case 1175:
case 2471:
case 131:
case 2591:
case 765:
case 2815:
case 1950:
case 1997:
case 1882:
case 2994:
case 389:
case 924:
case 411:
case 1733:
case 1900:
case 1286:
case 960:
case 4047:
case 2107:
case 1104:
case 432:
case 1509:
case 1902:
case 2190:
case 2157:
case 965:
case 2764:
case 3403:
case 1251:
case 611:
case 1639:
case 1767:
case 55:
case 2084:
case 3453:
case 582:
case 1087:
case 3468:
case 1869:
case 3845:
case 632:
case 1612:
case 564:
case 3472:
case 2706:
case 3663:
case 3780:
case 3024:
case 3470:
case 837:
case 3590:
case 3062:
case 791:
case 525:
case 3248:
case 179:
case 4076:
case 3782:
case 520:
case 3625:
case 736:
case 1285:
case 807:
case 3114:
case 3362:
case 429:
case 2212:
case 3941:
case 778:
case 3530:
case 3912:
case 3893:
case 173:
case 706:
case 846:
case 3939:
case 3360:
case 2601:
case 2210:
case 3532:
case 3910:
case 2651:
case 747:
case 2239:
case 759:
case 1888:
case 2071:
case 978:
case 3779:
case 1746:
case 906:
case 3378:
case 860:
case 1958:
case 1313:
case 1908:
case 197:
case 1176:
case 2384:
case 3489:
case 853:
case 2755:
case 2130:
case 366:
case 402:
case 2705:
case 3462:
case 2119:
case 2514:
case 3626:
case 3234:
case 891:
case 2329:
case 383:
case 4075:
case 737:
case 2132:
case 1937:
case 3072:
case 2728:
case 3240:
case 2531:
case 3598:
case 3652:
case 101:
case 3602:
case 345:
case 2940:
case 1413:
case 3242:
case 937:
case 3389:
case 2549:
case 2144:
case 1487:
case 3697:
case 3650:
case 3068:
case 3600:
case 3846:
case 3003:
case 2942:
case 1260:
case 1791:
case 2227:
case 15:
case 182:
case 1262:
case 3385:
case 3167:
case 541:
case 1866:
case 3:
case 481:
case 2759:
case 3996:
case 3051:
case 2892:
case 2913:
case 2308:
case 1442:
case 558:
case 3213:
case 2363:
case 2709:
case 2296:
case 579:
case 4079:
case 1854:
case 668:
case 2890:
case 2325:
case 1440:
case 1278:
case 120:
case 1180:
case 512:
case 2000:
case 3775:
case 1334:
case 1522:
case 2603:
case 2337:
case 2097:
case 3086:
case 1929:
case 372:
case 3943:
case 1520:
case 596:
case 1169:
case 1564:
case 3485:
case 1695:
case 2567:
case 3891:
case 531:
case 2458:
case 3515:
case 2463:
case 1289:
case 1961:
case 2026:
case 259:
case 1311:
case 247:
case 3754:
case 1340:
case 1556:
case 2073:
case 2235:
case 3133:
case 2425:
case 1040:
case 3401:
case 1268:
case 1203:
case 2898:
case 2302:
case 3747:
case 670:
case 675:
case 501:
case 1823:
case 3661:
case 1034:
case 4021:
case 2300:
case 1865:
case 2037:
case 1394:
case 1272:
case 3177:
case 2397:
case 97:
case 246:
case 2025:
case 2819:
case 3516:
case 470:
case 2473:
case 2830:
case 1971:
case 1627:
case 1505:
case 2426:
case 2783:
case 2008:
case 3301:
case 2660:
case 3936:
case 2452:
case 260:
case 77:
case 265:
case 3765:
case 3776:
case 3684:
case 1179:
case 2497:
case 2450:
case 2577:
case 1731:
case 2400:
case 1847:
case 2844:
case 2496:
case 1389:
case 2576:
case 1068:
case 2565:
case 2694:
case 615:
case 1211:
case 1788:
case 1600:
case 1598:
case 1652:
case 2095:
case 49:
case 301:
case 1602:
case 145:
case 2335:
case 1626:
case 183:
case 2427:
case 788:
case 3618:
case 166:
case 790:
case 521:
case 795:
case 3583:
case 2343:
case 1070:
case 1462:
case 2208:
case 594:
case 3958:
case 227:
case 2036:
case 1877:
case 3963:
case 71:
case 1489:
case 2396:
case 3699:
case 2263:
case 3908:
case 1149:
case 397:
case 2258:
case 2225:
case 1779:
case 3123:
case 3888:
case 135:
case 2648:
case 1378:
case 3925:
case 4091:
case 91:
case 1324:
case 204:
case 1532:
case 2855:
case 2327:
case 961:
case 2443:
case 69:
case 3285:
case 1519:
case 1362:
case 2985:
case 373:
case 1530:
case 1893:
case 1248:
case 2159:
case 1470:
case 1833:
case 1557:
case 1062:
case 1625:
case 1507:
case 2715:
case 4049:
case 2504:
case 2109:
case 890:
case 5:
case 1060:
case 1592:
case 167:
case 1999:
case 1780:
case 1191:
case 105:
case 3869:
case 3612:
case 1078:
case 2495:
case 3251:
case 1403:
case 3767:
case 4014:
case 3087:
case 2951:
case 3013:
case 3201:
case 1453:
case 28:
case 3880:
case 2856:
case 3509:
case 3952:
case 2043:
case 2252:
case 3154:
case 2806:
case 1370:
case 2200:
case 3997:
case 3733:
case 3900:
case 3286:
case 2250:
case 189:
case 572:
case 2273:
case 2395:
case 3166:
case 2864:
case 331:
case 1867:
case 2035:
case 1368:
case 2822:
case 1353:
case 2634:
case 3745:
case 685:
case 2399:
case 194:
case 456:
case 944:
case 3494:
case 2613:
case 2039:
case 680:
case 3731:
case 3847:
case 698:
case 1085:
case 1776:
case 530:
case 2041:
case 3627:
case 3505:
case 718:
case 2418:
case 3971:
case 643:
case 1516:
case 804:
case 3865:
case 2499:
case 1386:
case 78:
case 752:
case 3272:
case 1177:
case 2970:
case 1747:
case 3635:
case 2744:
case 540:
case 443:
case 3823:
case 3270:
case 3188:
case 583:
case 3253:
case 2155:
case 2730:
case 2903:
case 952:
case 3011:
case 2953:
case 734:
case 1451:
case 3203:
case 4045:
case 2105:
case 2968:
case 2719:
case 1629:
case 633:
case 609:
case 1995:
case 1814:
case 3121:
case 2580:
case 3340:
case 2809:
case 639:
case 2792:
case 1133:
case 3289:
case 3961:
case 3342:
case 704:
case 1754:
case 3520:
case 172:
case 1943:
case 2441:
case 2412:
case 3169:
case 457:
case 1485:
case 3695:
case 3522:
case 4093:
case 21:
case 1775:
case 1086:
case 904:
case 3094:
case 325:
case 2978:
case 3278:
case 2156:
case 2521:
case 320:
case 3180:
case 364:
case 1996:
case 3182:
case 1001:
case 567:
case 288:
case 2164:
case 439:
case 3262:
case 1167:
case 671:
case 852:
case 3875:
case 500:
case 3866:
case 2120:
case 1927:
case 3260:
case 3791:
case 3636:
case 2339:
case 2960:
case 3224:
case 2122:
case 3033:
case 3266:
case 1021:
case 3619:
case 2316:
case 2173:
case 82:
case 2126:
case 769:
case 2551:
case 3632:
case 2501:
case 322:
case 1388:
case 2904:
case 385:
case 4011:
case 1907:
case 4042:
case 380:
case 3204:
case 3377:
case 855:
case 1479:
case 1194:
case 3446:
case 1599:
case 2735:
case 3644:
case 228:
case 2100:
case 502:
case 2884:
case 1724:
case 3573:
case 2614:
case 1080:
case 2416:
case 2727:
case 1617:
case 1938:
case 356:
case 1760:
case 2829:
case 333:
case 1082:
case 787:
case 886:
case 1762:
case 3151:
case 3526:
case 2209:
case 3959:
case 2796:
case 3713:
case 1488:
case 3698:
case 3067:
case 3909:
case 2259:
case 3500:
case 3477:
case 3597:
case 2649:
case 529:
case 523:
case 425:
case 3803:
case 92:
case 3917:
case 755:
case 3983:
case 2691:
case 2283:
case 181:
case 2736:
case 3185:
case 1214:
case 1469:
case 464:
case 2217:
case 3445:
case 1249:
case 303:
case 3276:
case 1382:
case 3265:
case 72:
case 4048:
case 2108:
case 2976:
case 217:
case 274:
case 2923:
case 955:
case 1421:
case 482:
case 3870:
case 2125:
case 950:
case 1510:
case 56:
case 371:
case 1539:
case 963:
case 2871:
case 1512:
case 1930:
case 1369:
case 3345:
case 1768:
case 1541:
case 1944:
case 349:
case 3508:
case 625:
case 1111:
case 3247:
case 620:
case 1482:
case 3558:
case 4094:
case 3333:
case 3607:
case 1321:
case 2016:
case 3657:
case 2220:
case 497:
case 1701:
case 3314:
case 1751:
case 286:
case 2222:
case 3529:
case 2432:
case 2826:
case 2802:
case 3178:
case 310:
case 3280:
case 2980:
case 2206:
case 3091:
case 2852:
case 1323:
case 2646:
case 2184:
case 1376:
case 3349:
case 2589:
case 1447:
case 570:
case 3282:
case 575:
case 1894:
case 129:
case 2982:
case 2897:
case 2850:
case 3561:
case 601:
case 2693:
case 1054:
case 774:
case 1245:
case 2090:
case 2562:
case 2319:
case 2969:
case 1004:
case 1628:
case 816:
case 1655:
case 401:
case 2560:
case 673:
case 2129:
case 717:
case 1527:
case 1786:
case 255:
case 974:
case 250:
case 3221:
case 828:
case 1476:
case 917:
case 3449:
case 2677:
case 2344:
case 102:
case 3189:
case 3103:
case 2205:
case 3153:
case 3905:
case 132:
case 2044:
case 3885:
case 1916:
case 111:
case 3491:
case 1366:
case 1375:
case 2645:
case 431:
case 287:
case 2808:
case 2274:
case 2392:
case 2858:
case 496:
case 2863:
case 2032:
case 3740:
case 3170:
case 1354:
case 3711:
case 2357:
case 2390:
case 2019:
case 2307:
case 2633:
case 658:
case 1304:
case 2988:
case 3742:
case 1076:
case 1834:
case 1065:
case 2741:
case 992:
case 1785:
case 631:
case 479:
case 916:
case 2098:
case 2667:
case 2739:
case 1475:
case 1595:
case 3031:
case 458:
case 2338:
case 1620:
case 3391:
case 1023:
case 3279:
case 3615:
case 1811:
case 3014:
case 817:
case 1454:
case 2457:
case 3951:
case 2013:
case 352:
case 1084:
case 38:
case 2610:
case 2087:
case 1764:
case 2767:
case 3901:
case 85:
case 1685:
case 469:
case 3566:
case 2612:
case 1722:
case 1371:
case 1756:
case 258:
case 334:
case 825:
case 1948:
case 279:
case 3159:
case 1061:
case 1781:
case 1218:
case 212:
case 231:
case 1471:
case 3395:
case 17:
case 4032:
case 3273:
case 559:
case 547:
case 3642:
case 2286:
case 2733:
case 2900:
case 1815:
case 3200:
case 318:
case 3986:
case 2950:
case 3611:
case 3806:
case 3640:
case 1190:
case 3252:
case 3202:
case 1107:
case 2880:
case 669:
case 4044:
case 1705:
case 1514:
case 725:
case 1755:
case 1130:
case 686:
case 95:
case 2618:
case 1728:
case 1934:
case 3237:
case 1132:
case 201:
case 4092:
case 2777:
case 925:
case 782:
case 75:
case 1942:
case 3565:
case 1911:
case 964:
case 1686:
case 2487:
case 1241:
case 62:
case 2285:
case 3183:
case 1239:
case 304:
case 507:
case 1210:
case 1198:
case 2888:
case 1071:
case 560:
case 2313:
case 297:
case 3258:
case 650:
case 2699:
case 3263:
case 2165:
case 1461:
case 655:
case 2963:
case 3208:
case 3874:
case 2094:
case 1653:
case 1050:
case 831:
case 3410:
case 2929:
case 1000:
case 896:
case 3439:
case 2522:
case 1337:
case 2564:
case 1838:
case 2169:
case 2695:
case 1243:
case 1567:
case 57:
case 361:
case 3441:
case 3757:
case 3790:
case 1026:
case 3261:
case 2311:
case 159:
case 3582:
case 3018:
case 674:
case 1463:
case 2961:
case 617:
case 2506:
case 106:
case 3859:
case 773:
case 3580:
case 2121:
case 2556:
case 178:
case 2636:
case 282:
case 2260:
case 841:
case 3310:
case 3341:
case 2581:
case 701:
case 3120:
case 2875:
case 3164:
case 417:
case 3569:
case 2442:
case 1358:
case 3284:
case 388:
case 1296:
case 2182:
case 879:
case 1987:
case 137:
case 1913:
case 858:
case 2440:
case 2804:
case 395:
case 3521:
case 225:
case 2854:
case 3106:
case 390:
case 1325:
case 1533:
case 1857:
case 1473:
case 1830:
case 1593:
case 931:
case 2971:
case 2528:
case 3271:
case 146:
case 1819:
case 1025:
case 1660:
case 873:
case 3418:
case 2555:
case 2505:
case 1426:
case 1717:
case 616:
case 107:
case 1624:
case 165:
case 628:
case 897:
case 1678:
case 2348:
case 3588:
case 2731:
case 1400:
case 3798:
case 1844:
case 2179:
case 2574:
case 3613:
case 1577:
case 3010:
case 712:
case 3399:
case 136:
case 3128:
case 2040:
case 1295:
case 1373:
case 779:
case 1116:
case 3719:
case 3953:
case 2011:
case 758:
case 3155:
case 153:
case 492:
case 2448:
case 1352:
case 741:
case 3970:
case 2272:
case 3579:
case 416:
case 2034:
case 1300:
case 3972:
case 1037:
case 2223:
case 577:
case 1540:
case 1356:
case 374:
case 317:
case 1511:
case 3965:
case 3163:
case 2265:
case 548:
case 3315:
case 514:
case 2276:
case 3158:
case 1112:
case 2445:
case 2367:
case 3736:
case 3283:
case 2983:
case 61:
case 1481:
case 1914:
case 1320:
case 1141:
case 2917:
case 2638:
case 2803:
case 1110:
case 1771:
case 2046:
case 490:
case 2868:
case 1534:
case 2853:
case 2537:
case 2690:
case 2657:
case 3016:
case 915:
case 2093:
case 41:
case 1654:
case 1028:
case 910:
case 2607:
case 2333:
case 2558:
case 1244:
case 3415:
case 2563:
case 2247:
case 695:
case 1005:
case 690:
case 249:
case 257:
case 2508:
case 710:
case 1464:
case 2345:
case 3585:
case 2467:
case 3871:
case 3795:
case 1074:
case 162:
case 271:
case 2077:
case 3884:
case 1292:
case 298:
case 1374:
case 2186:
case 3735:
case 3197:
case 3954:
case 1081:
case 1207:
case 1290:
case 2045:
case 2254:
case 1548:
case 285:
case 3501:
case 2824:
case 1118:
case 1827:
case 243:
case 1355:
case 1305:
case 576:
case 392:
case 3126:
case 3743:
case 3551:
case 2619:
case 1729:
case 3173:
case 316:
case 2862:
case 3975:
case 89:
case 1199:
case 815:
case 2550:
case 3861:
case 1676:
case 3586:
case 2346:
case 810:
case 599:
case 1064:
case 3631:
case 2909:
case 3259:
case 2698:
case 2552:
case 1835:
case 1784:
case 3209:
case 2959:
case 4012:
case 1455:
case 4041:
case 233:
case 1428:
case 1843:
case 4010:
case 256:
case 1006:
case 3416:
case 3727:
case 2493:
case 3030:
case 3988:
case 3633:
case 634:
case 1409:
case 756:
case 857:
case 3357:
case 849:
case 2170:
case 1621:
case 3032:
case 2740:
case 584:
case 709:
case 387:
case 426:
case 3274:
case 3392:
case 733:
case 4035:
case 2734:
case 652:
case 1737:
case 418:
case 2571:
case 3228:
case 2885:
case 1839:
case 2168:
case 53:
case 909:
case 3044:
case 2905:
case 933:
case 2955:
case 562:
case 1017:
case 1359:
case 3570:
case 3490:
case 3457:
case 2014:
case 177:
case 980:
case 803:
case 985:
case 1758:
case 3407:
case 1763:
case 452:
case 722:
case 743:
case 2615:
case 3979:
case 148:
case 369:
case 151:
case 2391:
case 780:
case 3338:
case 3739:
case 3667:
case 1136:
case 193:
case 3503:
case 922:
case 626:
case 3741:
case 3837:
case 3553:
case 54:
case 3897:
case 3850:
case 2561:
case 2886:
case 771:
case 2282:
case 949:
case 3444:
case 3589:
case 3184:
case 1215:
case 3800:
case 3852:
case 2091:
case 3799:
case 3980:
case 3256:
case 2280:
case 2906:
case 210:
case 2922:
case 363:
case 2160:
case 3826:
case 2124:
case 971:
case 1127:
case 757:
case 3222:
case 749:
case 3264:
case 2920:
case 4036:
case 2314:
case 3873:
case 1967:
case 1009:
case 2964:
case 2449:
case 3677:
case 1587:
case 903:
case 885:
case 1899:
case 1752:
case 1700:
case 3498:
case 3921:
case 2794:
case 1135:
case 627:
case 1750:
case 3332:
case 4095:
case 1773:
case 739:
case 3092:
case 2851:
case 3969:
case 3330:
case 1945:
case 3007:
case 1143:
case 1726:
case 3562:
case 2414:
case 2269:
case 1483:
case 3238:
case 2760:
case 2291:
case 3843:
case 2683:
case 2724:
case 3991:
case 1416:
case 1727:
case 2617:
case 932:
case 754:
case 563:
case 460:
case 1015:
case 465:
case 3455:
case 4008:
case 1259:
case 3020:
case 4058:
case 1796:
case 3784:
case 1649:
case 2379:
case 446:
case 3474:
case 732:
case 954:
case 4025:
case 3022:
case 2778:
case 2021:
case 3729:
case 1173:
case 607:
case 1975:
case 3328:
case 116:
case 3827:
case 3355:
case 52:
case 646:
case 942:
case 1743:
case 1551:
case 3305:
case 2957:
case 624:
case 2789:
case 550:
case 1954:
case 453:
case 3081:
case 2388:
case 1904:
case 2069:
case 3290:
case 3257:
case 3761:
case 1100:
case 2992:
case 2813:
case 128:
case 1884:
case 30:
case 665:
case 3896:
case 491:
case 3647:
case 2599:
case 2479:
case 2194:
case 723:
case 3292:
case 3374:
case 1735:
case 1150:
case 2134:
case 729:
case 1137:
case 406:
case 3074:
case 811:
case 3836:
case 3420:
case 832:
case 3381:
case 2541:
case 2088:
case 1871:
case 2703:
case 4026:
case 3666:
case 3219:
case 447:
case 3675:
case 86:
case 4002:
case 3055:
case 2142:
case 384:
case 2944:
case 587:
case 4052:
case 1947:
case 2111:
case 2321:
case 2140:
case 1016:
case 854:
case 3456:
case 3028:
case 2772:
case 3604:
case 2079:
case 702:
case 3110:
case 3771:
case 3322:
case 34:
case 3139:
case 1736:
case 281:
case 2214:
case 2469:
case 437:
case 3364:
case 3112:
case 3320:
case 3141:
case 3895:
case 1691:
case 3481:
case 902:
case 1965:
case 3949:
case 678:
case 2249:
case 1163:
case 569:
case 659:
case 2609:
case 3931:
case 647:
case 1125:
case 2998:
case 3298:
case 2231:
case 3540:
case 2659:
case 1007:
case 1718:
case 1281:
case 2004:
case 3483:
case 2054:
case 1693:
case 516:
case 3726:
case 3417:
case 2245:
case 1319:
case 1562:
case 1057:
case 1524:
case 3773:
case 308:
case 1129:
case 1332:
case 2605:
case 2655:
case 592:
case 150:
case 1498:
case 3933:
case 2075:
case 3700:
case 3135:
case 3797:
case 2423:
case 155:
case 2476:
case 1677:
case 2465:
case 528:
case 3702:
case 1344:
case 3899:
case 2751:
case 2543:
case 3383:
case 2267:
case 3009:
case 1873:
case 1432:
case 1980:
case 2535:
case 1256:
case 2894:
case 229:
case 1897:
case 1850:
case 1589:
case 1184:
case 2113:
case 3215:
case 399:
case 968:
case 1444:
case 393:
case 881:
case 2076:
case 67:
case 2834:
case 1741:
case 2065:
case 1837:
case 1553:
case 242:
case 1710:
case 1338:
case 2023:
case 2466:
case 1739:
case 1098:
case 2595:
case 2475:
case 2664:
case 3725:
case 2246:
case 2811:
case 1492:
case 2842:
case 348:
case 169:
case 1979:
case 3708:
case 377:
case 3017:
case 2656:
case 3359:
case 1490:
case 1457:
case 2840:
case 2606:
case 3309:
case 3758:
case 2047:
case 3839:
case 232:
case 770:
case 3810:
case 2366:
case 3841:
case 2293:
case 1645:
case 3216:
case 1438:
case 2916:
case 3993:
case 1858:
case 254:
case 338:
case 975:
case 1032:
case 47:
case 3977:
case 2277:
case 187:
case 1808:
case 1392:
case 2304:
case 1030:
case 4061:
case 3621:
case 2354:
case 1357:
case 2489:
case 4009:
case 2544:
case 2149:
case 1208:
case 4059:
case 1874:
case 3461:
case 2877:
case 230:
case 2131:
case 3198:
case 2779:
case 3071:
case 1435:
case 104:
case 3429:
case 2532:
case 1327:
case 1855:
case 2939:
case 3601:
case 3816:
case 813:
case 608:
case 2912:
case 2893:
case 2530:
case 2941:
case 1828:
case 972:
case 1117:
case 1183:
case 2114:
case 2362:
case 3942:
case 2788:
case 919:
case 3144:
case 1576:
case 2697:
case 2068:
case 1565:
case 2242:
case 1694:
case 3940:
case 245:
case 3774:
case 1335:
case 240:
case 2598:
case 1095:
case 3531:
case 408:
case 821:
case 2072:
case 1237:
case 3132:
case 3329:
case 2626:
case 1427:
case 3514:
case 3119:
case 2462:
case 3705:
case 3755:
case 3157:
case 1043:
case 1640:
case 648:
case 1856:
case 1297:
case 677:
case 2372:
case 3994:
case 3029:
case 3815:
case 1200:
case 1986:
case 0:
case 2867:
case 3471:
case 1273:
case 1820:
case 2769:
case 2303:
case 1634:
case 651:
case 51:
case 2089:
case 2368:
case 872:
case 1822:
case 794:
case 1715:
case 1109:
case 1504:
case 721:
case 595:
case 2782:
case 2248:
case 2557:
case 2590:
case 2470:
case 2833:
case 134:
case 2024:
case 3756:
case 1027:
case 2780:
case 2663:
case 3706:
case 2060:
case 200:
case 1566:
case 414:
case 921:
case 3722:
case 1575:
case 3685:
case 1495:
case 2191:
case 3138:
case 3720:
case 18:
case 2403:
case 1336:
case 1901:
case 477:
case 845:
case 3689:
case 1579:
case 3546:
case 1174:
case 2386:
case 3037:
case 2849:
case 2661:
case 3300:
case 3352:
case 1970:
case 1744:
case 3898:
case 767:
case 2451:
case 1968:
case 3326:
case 353:
case 4081:
case 866:
case 1730:
case 1318:
case 336:
case 2814:
case 221:
case 1883:
case 883:
case 3373:
case 3116:
case 391:
case 3295:
case 989:
case 3400:
case 1687:
case 3577:
case 3497:
case 3450:
case 835:
case 1010:
case 1399:
case 4006:
case 2684:
case 527:
case 365:
case 1588:
case 3452:
case 1012:
case 360:
case 2085:
case 3063:
case 2936:
case 2301:
case 3058:
case 504:
case 4064:
case 3783:
case 307:
case 3008:
case 3473:
case 2516:
case 3662:
case 346:
case 3025:
case 1271:
case 1156:
case 945:
case 867:
case 3807:
case 766:
case 3533:
case 3890:
case 3857:
case 190:
case 1106:
case 3363:
case 3709:
case 2213:
case 3892:
case 3913:
case 783:
case 2:
case 3987:
case 3759:
case 1962:
case 745:
case 1341:
case 2671:
case 1312:
case 1164:
case 1569:
case 740:
case 966:
case 3545:
case 1960:
case 3437:
case 552:
case 58:
case 1122:
case 805:
case 1099:
case 1924:
case 306:
case 889:
case 3235:
case 3073:
case 2935:
case 935:
case 1809:
case 43:
case 2754:
case 359:
case 3408:
case 1757:
case 1261:
case 1989:
case 2515:
case 3463:
case 1707:
case 1582:
case 3458:
case 2704:
case 1018:
case 544:
case 3567:
case 3052:
case 2145:
case 730:
case 3838:
case 526:
case 64:
case 272:
case 2943:
case 4055:
case 1441:
case 3097:
case 1410:
case 2086:
case 1439:
case 3603:
case 1229:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752015602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,];
var gg_b = "1752015602/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
