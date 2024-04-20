// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 445:
case 319:
case 1038:
case 3790:
case 1674:
case 629:
case 3353:
case 3093:
case 3313:
case 849:
case 534:
case 1018:
case 895:
case 179:
case 2028:
case 1539:
case 1447:
case 1710:
case 1730:
case 263:
case 3717:
case 2714:
case 3152:
case 2896:
case 2902:
case 3442:
case 1193:
case 1939:
case 396:
case 613:
case 141:
case 2989:
case 2190:
case 186:
case 2310:
case 4063:
case 463:
case 3476:
case 3556:
case 980:
case 2056:
case 2341:
case 2474:
case 56:
case 249:
case 1111:
case 2237:
case 1046:
case 1600:
case 446:
case 2669:
case 1666:
case 2457:
case 3228:
case 3957:
case 2754:
case 2442:
case 1357:
case 1209:
case 3505:
case 348:
case 978:
case 323:
case 1622:
case 12:
case 3944:
case 7:
case 4004:
case 3191:
case 3388:
case 2559:
case 1110:
case 443:
case 667:
case 2380:
case 867:
case 3029:
case 2473:
case 2368:
case 3810:
case 2557:
case 2652:
case 1165:
case 2469:
case 471:
case 1457:
case 570:
case 3196:
case 3226:
case 423:
case 2500:
case 499:
case 3951:
case 3193:
case 4052:
case 2678:
case 3039:
case 379:
case 3282:
case 1340:
case 1147:
case 3516:
case 2774:
case 1073:
case 2077:
case 2640:
case 405:
case 936:
case 716:
case 513:
case 354:
case 1387:
case 4061:
case 240:
case 1234:
case 1750:
case 2767:
case 2383:
case 2304:
case 239:
case 303:
case 3240:
case 1839:
case 3761:
case 2982:
case 3050:
case 2674:
case 3297:
case 2734:
case 2970:
case 1153:
case 1461:
case 888:
case 1183:
case 1970:
case 553:
case 3415:
case 3446:
case 1028:
case 568:
case 1388:
case 2432:
case 2663:
case 3606:
case 4005:
case 1399:
case 2307:
case 3450:
case 2768:
case 143:
case 1654:
case 1499:
case 3401:
case 3872:
case 3940:
case 3839:
case 2940:
case 3095:
case 1489:
case 3939:
case 643:
case 2054:
case 2025:
case 3424:
case 3376:
case 602:
case 3914:
case 1367:
case 4086:
case 3089:
case 4019:
case 3792:
case 1524:
case 3820:
case 1161:
case 3211:
case 2217:
case 2637:
case 2898:
case 3758:
case 3690:
case 3107:
case 2636:
case 3805:
case 2158:
case 1011:
case 3299:
case 1460:
case 635:
case 3003:
case 72:
case 685:
case 3270:
case 1392:
case 366:
case 3857:
case 2667:
case 1872:
case 1735:
case 2270:
case 3789:
case 2919:
case 3072:
case 2141:
case 3170:
case 3428:
case 1377:
case 3930:
case 3587:
case 523:
case 1210:
case 1468:
case 2011:
case 1722:
case 3284:
case 1121:
case 653:
case 682:
case 1994:
case 2293:
case 3258:
case 2331:
case 3405:
case 2181:
case 3651:
case 2845:
case 2489:
case 724:
case 524:
case 3365:
case 900:
case 1181:
case 205:
case 3023:
case 1287:
case 2049:
case 1593:
case 2918:
case 1812:
case 1559:
case 2638:
case 1140:
case 216:
case 2933:
case 3753:
case 4045:
case 2317:
case 257:
case 1729:
case 1119:
case 3368:
case 3477:
case 2736:
case 2487:
case 962:
case 3989:
case 2779:
case 3868:
case 3743:
case 827:
case 2067:
case 679:
case 1452:
case 2459:
case 913:
case 3676:
case 3032:
case 3369:
case 2841:
case 3013:
case 3768:
case 351:
case 614:
case 3491:
case 2654:
case 3485:
case 1846:
case 864:
case 3366:
case 2692:
case 734:
case 3163:
case 420:
case 2390:
case 3933:
case 3288:
case 1054:
case 3610:
case 2059:
case 1958:
case 2263:
case 2671:
case 3064:
case 2932:
case 484:
case 343:
case 302:
case 708:
case 3099:
case 2481:
case 134:
case 3502:
case 2458:
case 2737:
case 2938:
case 2464:
case 991:
case 4012:
case 3598:
case 1978:
case 3322:
case 2108:
case 1014:
case 322:
case 583:
case 61:
case 595:
case 1157:
case 2093:
case 830:
case 225:
case 2522:
case 3566:
case 4027:
case 313:
case 1610:
case 1736:
case 1742:
case 3056:
case 2831:
case 470:
case 3351:
case 3828:
case 3176:
case 912:
case 1462:
case 2460:
case 1341:
case 2945:
case 1682:
case 694:
case 1195:
case 1787:
case 84:
case 640:
case 2937:
case 674:
case 1776:
case 2273:
case 3622:
case 1557:
case 3529:
case 98:
case 1617:
case 1732:
case 4065:
case 622:
case 3307:
case 806:
case 3875:
case 1804:
case 4025:
case 498:
case 3382:
case 2691:
case 3709:
case 3552:
case 2793:
case 3383:
case 1350:
case 3336:
case 1292:
case 3130:
case 1385:
case 3387:
case 1145:
case 3530:
case 2764:
case 2817:
case 592:
case 3699:
case 3184:
case 975:
case 2339:
case 3227:
case 2203:
case 1519:
case 3444:
case 2260:
case 1625:
case 1763:
case 1431:
case 2365:
case 1604:
case 3503:
case 3331:
case 2112:
case 1652:
case 2311:
case 3786:
case 1548:
case 3752:
case 1122:
case 2635:
case 1302:
case 1719:
case 1230:
case 2115:
case 1640:
case 1603:
case 101:
case 2561:
case 1213:
case 2399:
case 1613:
case 2051:
case 2866:
case 3668:
case 3967:
case 1972:
case 3525:
case 677:
case 988:
case 758:
case 2914:
case 927:
case 3052:
case 3319:
case 3432:
case 1851:
case 1909:
case 105:
case 485:
case 678:
case 981:
case 3429:
case 355:
case 37:
case 3770:
case 2610:
case 2470:
case 1883:
case 3715:
case 669:
case 1965:
case 409:
case 1706:
case 2465:
case 2716:
case 408:
case 2170:
case 1409:
case 691:
case 3655:
case 1359:
case 1961:
case 414:
case 2834:
case 178:
case 54:
case 2252:
case 1306:
case 1936:
case 1376:
case 59:
case 4040:
case 2759:
case 713:
case 2284:
case 3011:
case 3996:
case 2900:
case 1817:
case 2467:
case 3673:
case 2606:
case 3923:
case 480:
case 1062:
case 3006:
case 1789:
case 3026:
case 1915:
case 3511:
case 1569:
case 3860:
case 2795:
case 2760:
case 3891:
case 2409:
case 3874:
case 3267:
case 4069:
case 3231:
case 2617:
case 3434:
case 641:
case 2429:
case 3925:
case 3613:
case 2625:
case 2063:
case 3178:
case 65:
case 392:
case 2147:
case 3833:
case 3440:
case 3888:
case 2889:
case 928:
case 385:
case 2004:
case 95:
case 1537:
case 1563:
case 42:
case 2665:
case 2430:
case 1560:
case 805:
case 1576:
case 31:
case 3791:
case 3001:
case 3083:
case 921:
case 1435:
case 2493:
case 3661:
case 2835:
case 2215:
case 1131:
case 2345:
case 2436:
case 608:
case 536:
case 4073:
case 1602:
case 2959:
case 2300:
case 8:
case 1538:
case 585:
case 1174:
case 2100:
case 3354:
case 1198:
case 43:
case 3209:
case 2527:
case 4003:
case 1741:
case 2644:
case 1645:
case 1520:
case 430:
case 2485:
case 3128:
case 1325:
case 3802:
case 2622:
case 3367:
case 3122:
case 87:
case 2978:
case 3564:
case 2161:
case 3473:
case 1170:
case 1379:
case 2973:
case 1810:
case 260:
case 3858:
case 1568:
case 3913:
case 747:
case 2903:
case 2194:
case 3265:
case 2376:
case 3453:
case 346:
case 704:
case 2992:
case 1419:
case 321:
case 1202:
case 2894:
case 780:
case 655:
case 2152:
case 1333:
case 3920:
case 3780:
case 673:
case 27:
case 3544:
case 1178:
case 2574:
case 3332:
case 3787:
case 3634:
case 1485:
case 1647:
case 2388:
case 2942:
case 2808:
case 2164:
case 2033:
case 1606:
case 1517:
case 2223:
case 1030:
case 4095:
case 377:
case 768:
case 3510:
case 1960:
case 3436:
case 122:
case 517:
case 3057:
case 3616:
case 2269:
case 941:
case 3557:
case 1155:
case 3194:
case 2639:
case 2568:
case 907:
case 3008:
case 3061:
case 1101:
case 3855:
case 1185:
case 3221:
case 3055:
case 273:
case 561:
case 3926:
case 1057:
case 25:
case 3596:
case 3200:
case 715:
case 2045:
case 2226:
case 2177:
case 4088:
case 2800:
case 1456:
case 3346:
case 327:
case 2604:
case 2730:
case 2697:
case 2511:
case 531:
case 291:
case 1220:
case 289:
case 1086:
case 3590:
case 2780:
case 3716:
case 934:
case 753:
case 2657:
case 3430:
case 4050:
case 1275:
case 185:
case 2755:
case 1921:
case 966:
case 2413:
case 2879:
case 930:
case 607:
case 382:
case 138:
case 3149:
case 514:
case 3115:
case 1738:
case 701:
case 1187:
case 3045:
case 2323:
case 3815:
case 3206:
case 3073:
case 2499:
case 2590:
case 832:
case 359:
case 1290:
case 3033:
case 1565:
case 2278:
case 1363:
case 3499:
case 2454:
case 1841:
case 689:
case 1034:
case 2192:
case 2950:
case 4038:
case 3618:
case 1577:
case 914:
case 2515:
case 3371:
case 3457:
case 1502:
case 3774:
case 550:
case 812:
case 858:
case 2318:
case 3922:
case 3402:
case 3572:
case 2395:
case 11:
case 2184:
case 2700:
case 30:
case 2488:
case 2799:
case 1475:
case 2857:
case 2010:
case 556:
case 195:
case 1169:
case 459:
case 1075:
case 335:
case 3208:
case 3932:
case 1048:
case 3065:
case 2843:
case 3344:
case 2551:
case 1369:
case 1358:
case 1590:
case 1203:
case 2262:
case 1330:
case 4085:
case 1017:
case 171:
case 3197:
case 3441:
case 926:
case 2247:
case 3391:
case 356:
case 505:
case 2827:
case 3409:
case 1790:
case 85:
case 961:
case 1836:
case 104:
case 219:
case 2706:
case 2157:
case 3886:
case 294:
case 1954:
case 3215:
case 2529:
case 3779:
case 740:
case 35:
case 1471:
case 2019:
case 3053:
case 1312:
case 270:
case 502:
case 1238:
case 3675:
case 2183:
case 2471:
case 3100:
case 3378:
case 2541:
case 136:
case 3482:
case 3945:
case 3849:
case 2026:
case 404:
case 189:
case 1827:
case 19:
case 3317:
case 415:
case 373:
case 522:
case 3788:
case 3993:
case 1168:
case 2257:
case 2006:
case 1311:
case 2616:
case 2169:
case 2967:
case 896:
case 3403:
case 2809:
case 1819:
case 1798:
case 1033:
case 2254:
case 3646:
case 2295:
case 4041:
case 3641:
case 3739:
case 1039:
case 2986:
case 1619:
case 3141:
case 618:
case 1667:
case 1200:
case 971:
case 2739:
case 533:
case 3386:
case 2924:
case 841:
case 456:
case 769:
case 2438:
case 1403:
case 1320:
case 1493:
case 2463:
case 765:
case 1492:
case 3670:
case 3842:
case 1973:
case 3908:
case 3877:
case 1878:
case 778:
case 2510:
case 349:
case 3777:
case 3861:
case 3713:
case 3955:
case 1864:
case 2083:
case 1854:
case 918:
case 4078:
case 266:
case 181:
case 3237:
case 3683:
case 1855:
case 2287:
case 634:
case 2731:
case 876:
case 3579:
case 418:
case 2538:
case 3058:
case 2204:
case 902:
case 3635:
case 855:
case 1009:
case 288:
case 2098:
case 2721:
case 1919:
case 2556:
case 2580:
case 371:
case 2301:
case 3370:
case 1450:
case 3778:
case 1389:
case 2751:
case 1737:
case 2305:
case 1589:
case 217:
case 967:
case 168:
case 604:
case 258:
case 773:
case 4091:
case 2864:
case 2023:
case 1027:
case 1481:
case 3416:
case 3899:
case 565:
case 1310:
case 1925:
case 819:
case 576:
case 4081:
case 1096:
case 1189:
case 4090:
case 3395:
case 473:
case 2770:
case 958:
case 804:
case 474:
case 1108:
case 3092:
case 3207:
case 3243:
case 3972:
case 3285:
case 3419:
case 3165:
case 578:
case 606:
case 3960:
case 3555:
case 848:
case 654:
case 714:
case 1785:
case 2334:
case 703:
case 1196:
case 2347:
case 541:
case 3832:
case 3534:
case 3125:
case 378:
case 1001:
case 3022:
case 91:
case 587:
case 1748:
case 1861:
case 672:
case 2666:
case 520:
case 3905:
case 2971:
case 3195:
case 508:
case 1762:
case 883:
case 521:
case 2507:
case 2738:
case 133:
case 1840:
case 3863:
case 2167:
case 3392:
case 3094:
case 1081:
case 1788:
case 2030:
case 2071:
case 1125:
case 977:
case 1701:
case 1911:
case 1707:
case 2182:
case 2029:
case 650:
case 3506:
case 2046:
case 1711:
case 851:
case 94:
case 2132:
case 1950:
case 2145:
case 863:
case 3678:
case 3662:
case 2821:
case 1323:
case 651:
case 766:
case 1097:
case 1504:
case 406:
case 736:
case 1284:
case 1438:
case 1037:
case 494:
case 2999:
case 2732:
case 3154:
case 3658:
case 1717:
case 1535:
case 1440:
case 1370:
case 4011:
case 1945:
case 3845:
case 1514:
case 3894:
case 994:
case 3515:
case 4008:
case 2871:
case 1849:
case 2873:
case 3547:
case 2240:
case 2997:
case 3183:
case 2213:
case 512:
case 2546:
case 148:
case 106:
case 1947:
case 3827:
case 331:
case 881:
case 63:
case 3279:
case 3694:
case 925:
case 2363:
case 213:
case 3066:
case 221:
case 818:
case 3725:
case 277:
case 2350:
case 2705:
case 124:
case 519:
case 2563:
case 3773:
case 1381:
case 2981:
case 2143:
case 3459:
case 1990:
case 2524:
case 1628:
case 3201:
case 1225:
case 3318:
case 2358:
case 1508:
case 76:
case 2039:
case 2953:
case 182:
case 3608:
case 1366:
case 4018:
case 183:
case 2282:
case 731:
case 1983:
case 1541:
case 2855:
case 2274:
case 3361:
case 1047:
case 1347:
case 1818:
case 2005:
case 3603:
case 589:
case 2272:
case 3591:
case 844:
case 3938:
case 835:
case 850:
case 599:
case 196:
case 2565:
case 1562:
case 3398:
case 2148:
case 2836:
case 123:
case 2882:
case 2588:
case 1918:
case 1743:
case 719:
case 3019:
case 970:
case 2689:
case 3754:
case 2998:
case 751:
case 2445:
case 3864:
case 2853:
case 3233:
case 3783:
case 3305:
case 1992:
case 3811:
case 1228:
case 2286:
case 1164:
case 3965:
case 3254:
case 3151:
case 2419:
case 1912:
case 482:
case 879:
case 1103:
case 3941:
case 284:
case 1780:
case 190:
case 836:
case 2126:
case 3540:
case 2068:
case 2251:
case 3843:
case 2110:
case 2521:
case 1661:
case 2008:
case 1219:
case 3034:
case 979:
case 3252:
case 2712:
case 1793:
case 3300:
case 491:
case 2993:
case 947:
case 3652:
case 3389:
case 2725:
case 3342:
case 2807:
case 18:
case 4077:
case 525:
case 3680:
case 1572:
case 2851:
case 242:
case 1232:
case 1822:
case 92:
case 1594:
case 3850:
case 3067:
case 2520:
case 3413:
case 2641:
case 3760:
case 2372:
case 3882:
case 763:
case 1734:
case 2102:
case 3308:
case 1373:
case 3728:
case 3509:
case 3698:
case 2433:
case 825:
case 843:
case 552:
case 1772:
case 2869:
case 2149:
case 1626:
case 4067:
case 571:
case 3246:
case 1453:
case 2422:
case 3373:
case 2012:
case 756:
case 1998:
case 188:
case 1171:
case 1528:
case 2962:
case 1473:
case 2268:
case 2228:
case 1229:
case 3410:
case 3138:
case 3968:
case 3418:
case 2212:
case 2235:
case 2234:
case 2258:
case 2994:
case 987:
case 2081:
case 3756:
case 3539:
case 3358:
case 1433:
case 2080:
case 1673:
case 1932:
case 3345:
case 829:
case 24:
case 3225:
case 2163:
case 2398:
case 1664:
case 3281:
case 1091:
case 2955:
case 1727:
case 628:
case 2796:
case 475:
case 3528:
case 1102:
case 3819:
case 3084:
case 687:
case 447:
case 882:
case 2703:
case 3776:
case 3712:
case 2329:
case 3594:
case 3177:
case 419:
case 1724:
case 1969:
case 2585:
case 1256:
case 3062:
case 949:
case 1614:
case 569:
case 2785:
case 920:
case 1092:
case 968:
case 3042:
case 811:
case 976:
case 1191:
case 3729:
case 453:
case 1124:
case 3909:
case 3619:
case 3804:
case 584:
case 3490:
case 3113:
case 1616:
case 2040:
case 1401:
case 1053:
case 4020:
case 574:
case 1414:
case 2038:
case 2057:
case 1273:
case 383:
case 3742:
case 1099:
case 684:
case 754:
case 2415:
case 2717:
case 3915:
case 102:
case 2838:
case 3007:
case 2009:
case 251:
case 2113:
case 2266:
case 3407:
case 2828:
case 2221:
case 3255:
case 103:
case 3124:
case 2231:
case 2418:
case 3946:
case 224:
case 2446:
case 1113:
case 3829:
case 3931:
case 4079:
case 2723:
case 3343:
case 577:
case 2913:
case 2476:
case 1071:
case 2018:
case 2856:
case 3822:
case 3508:
case 770:
case 600:
case 728:
case 1703:
case 2839:
case 211:
case 4033:
case 1696:
case 387:
case 656:
case 3636:
case 44:
case 1808:
case 296:
case 1631:
case 3693:
case 3118:
case 362:
case 2651:
case 1223:
case 2885:
case 1353:
case 1100:
case 1148:
case 1040:
case 3414:
case 1063:
case 3167:
case 2480:
case 1596:
case 648:
case 1601:
case 1916:
case 3077:
case 2129:
case 161:
case 3493:
case 417:
case 2972:
case 3097:
case 2232:
case 1984:
case 2130:
case 1285:
case 3292:
case 1860:
case 892:
case 2849:
case 2041:
case 2353:
case 3135:
case 860:
case 2698:
case 3866:
case 594:
case 259:
case 214:
case 2180:
case 3518:
case 4076:
case 1214:
case 3218:
case 2134:
case 1194:
case 3249:
case 2944:
case 1759:
case 433:
case 591:
case 652:
case 462:
case 3295:
case 2603:
case 2250:
case 1368:
case 2532:
case 2672:
case 3121:
case 1540:
case 1501:
case 2984:
case 3766:
case 1683:
case 486:
case 2735:
case 788:
case 311:
case 3248:
case 17:
case 2337:
case 2643:
case 2789:
case 380:
case 1239:
case 246:
case 3250:
case 1182:
case 3561:
case 2977:
case 2021:
case 1633:
case 3393:
case 2847:
case 2160:
case 3621:
case 3390:
case 828:
case 344:
case 243:
case 2577:
case 1490:
case 1087:
case 3647:
case 1657:
case 3187:
case 955:
case 1831:
case 1262:
case 2327:
case 3327:
case 2883:
case 923:
case 2128:
case 1257:
case 2225:
case 777:
case 3724:
case 3745:
case 472:
case 908:
case 995:
case 3460:
case 3301:
case 2872:
case 1286:
case 3969:
case 2468:
case 2000:
case 1801:
case 345:
case 692:
case 612:
case 3769:
case 2675:
case 1451:
case 3041:
case 2159:
case 3726:
case 3806:
case 3558:
case 668:
case 707:
case 3578:
case 1513:
case 244:
case 2662:
case 169:
case 3475:
case 1966:
case 1607:
case 1094:
case 2384:
case 3784:
case 3869:
case 2859:
case 3303:
case 492:
case 2375:
case 2681:
case 998:
case 1999:
case 1767:
case 3592:
case 2336:
case 469:
case 2370:
case 139:
case 2027:
case 2951:
case 410:
case 3654:
case 4060:
case 77:
case 276:
case 847:
case 2905:
case 782:
case 3468:
case 426:
case 3615:
case 231:
case 2728:
case 633:
case 1944:
case 1933:
case 2758:
case 1771:
case 395:
case 2084:
case 675:
case 1779:
case 1587:
case 1852:
case 1716:
case 2013:
case 820:
case 3628:
case 358:
case 2801:
case 839:
case 937:
case 757:
case 764:
case 845:
case 605:
case 1135:
case 3489:
case 4051:
case 1844:
case 1201:
case 3276:
case 1875:
case 943:
case 1052:
case 1534:
case 1361:
case 4083:
case 2553:
case 1794:
case 785:
case 3172:
case 2174:
case 2826:
case 515:
case 3744:
case 295:
case 2964:
case 2022:
case 3051:
case 3682:
case 3330:
case 262:
case 1837:
case 544:
case 3991:
case 1987:
case 2560:
case 3016:
case 2076:
case 890:
case 2656:
case 1279:
case 1653:
case 236:
case 1449:
case 252:
case 2187:
case 1814:
case 66:
case 572:
case 1243:
case 1117:
case 856:
case 1079:
case 1324:
case 1993:
case 2104:
case 279:
case 1698:
case 3892:
case 339:
case 4002:
case 878:
case 1396:
case 1934:
case 3241:
case 1620:
case 2930:
case 4001:
case 3873:
case 2137:
case 3404:
case 4074:
case 2355:
case 3570:
case 3277:
case 397:
case 663:
case 816:
case 3471:
case 2854:
case 2055:
case 1029:
case 1820:
case 2631:
case 2107:
case 3010:
case 2189:
case 3217:
case 2688:
case 709:
case 2740:
case 1637:
case 551:
case 45:
case 795:
case 1411:
case 3080:
case 46:
case 3808:
case 2578:
case 1940:
case 2296:
case 437:
case 2509:
case 3164:
case 720:
case 3568:
case 3696:
case 3623:
case 793:
case 2280:
case 1175:
case 268:
case 1927:
case 1416:
case 3901:
case 412:
case 992:
case 357:
case 3995:
case 2501:
case 619:
case 807:
case 3799:
case 2351:
case 939:
case 2321:
case 2891:
case 1564:
case 1258:
case 3009:
case 4016:
case 3974:
case 1770:
case 3212:
case 2044:
case 877:
case 2154:
case 1061:
case 1065:
case 4094:
case 3597:
case 481:
case 1570:
case 2749:
case 2595:
case 2772:
case 483:
case 1317:
case 3273:
case 253:
case 2649:
case 3542:
case 3306:
case 1700:
case 1530:
case 200:
case 3865:
case 287:
case 2791:
case 564:
case 2354:
case 2024:
case 2609:
case 2628:
case 111:
case 2548:
case 1008:
case 3514:
case 1792:
case 2396:
case 1549:
case 1948:
case 3980:
case 165:
case 100:
case 2539:
case 1342:
case 3132:
case 1880:
case 1478:
case 184:
case 290:
case 631:
case 47:
case 1720:
case 1974:
case 1080:
case 208:
case 3467:
case 3109:
case 86:
case 741:
case 3627:
case 814:
case 2630:
case 504:
case 3535:
case 230:
case 3667:
case 1870:
case 1421:
case 3182:
case 407:
case 1714:
case 1781:
case 3257:
case 4032:
case 2122:
case 1020:
case 738:
case 3841:
case 732:
case 2516:
case 2316:
case 1503:
case 3751:
case 3700:
case 2818:
case 193:
case 14:
case 1120:
case 3451:
case 3520:
case 2220:
case 1646:
case 4054:
case 1518:
case 118:
case 3143:
case 2710:
case 1632:
case 142:
case 3764:
case 2290:
case 3796:
case 1056:
case 1728:
case 3640:
case 2201:
case 853:
case 1246:
case 3990:
case 2573:
case 2385:
case 155:
case 1897:
case 3283:
case 3639:
case 2646:
case 3748:
case 2449:
case 983:
case 588:
case 2491:
case 2852:
case 3274:
case 372:
case 153:
case 1459:
case 51:
case 840:
case 1638:
case 3803:
case 3134:
case 360:
case 1873:
case 3341:
case 511:
case 490:
case 2299:
case 2552:
case 3455:
case 283:
case 90:
case 1012:
case 400:
case 146:
case 226:
case 1386:
case 1833:
case 3963:
case 3396:
case 88:
case 1093:
case 2605:
case 3772:
case 1163:
case 3549:
case 1917:
case 68:
case 3145:
case 803:
case 3259:
case 945:
case 3626:
case 3854:
case 3512:
case 3695:
case 931:
case 2741:
case 1344:
case 2653:
case 2958:
case 1224:
case 3607:
case 1997:
case 307:
case 1929:
case 2426:
case 3964:
case 1660:
case 924:
case 621:
case 166:
case 3574:
case 4024:
case 1069:
case 3289:
case 2357:
case 1205:
case 3867:
case 2549:
case 2064:
case 2412:
case 2645:
case 2816:
case 1226:
case 1901:
case 1051:
case 3290:
case 2718:
case 1544:
case 2887:
case 2207:
case 2406:
case 232:
case 3648:
case 1118:
case 36:
case 1343:
case 3359:
case 489:
case 197:
case 1172:
case 1834:
case 1605:
case 3567:
case 2753:
case 2880:
case 2342:
case 660:
case 2140:
case 3068:
case 2103:
case 2431:
case 333:
case 767:
case 1761:
case 1753:
case 2745:
case 3795:
case 1410:
case 3881:
case 2784:
case 2202:
case 1252:
case 942:
case 1588:
case 1888:
case 959:
case 177:
case 2308:
case 96:
case 3878:
case 2117:
case 248:
case 172:
case 1300:
case 439:
case 1624:
case 1842:
case 1291:
case 2810:
case 2072:
case 1199:
case 1903:
case 204:
case 620:
case 1321:
case 1887:
case 3949:
case 889:
case 2874:
case 2820:
case 3469:
case 2324:
case 3697:
case 1477:
case 2210:
case 952:
case 1021:
case 299:
case 203:
case 3523:
case 1856:
case 3581:
case 2948:
case 2453:
case 1516:
case 546:
case 1215:
case 2584:
case 801:
case 885:
case 4035:
case 3014:
case 1305:
case 2804:
case 1364:
case 4034:
case 398:
case 4000:
case 2888:
case 1765:
case 3020:
case 2687:
case 1334:
case 1393:
case 2916:
case 3421:
case 624:
case 2229:
case 1266:
case 1482:
case 1725:
case 2936:
case 3478:
case 4048:
case 3035:
case 2875:
case 3704:
case 3884:
case 352:
case 202:
case 2289:
case 2455:
case 3110:
case 175:
case 3679:
case 3612:
case 150:
case 1938:
case 899:
case 2219:
case 29:
case 2797:
case 1681:
case 3522:
case 963:
case 2401:
case 3213:
case 1783:
case 3986:
case 3179:
case 3663:
case 2288:
case 1301:
case 3483:
case 542:
case 0:
case 2034:
case 2850:
case 2482:
case 1802:
case 557:
case 1424:
case 3071:
case 1437:
case 917:
case 1139:
case 3204:
case 3448:
case 334:
case 3966:
case 3180:
case 1526:
case 1708:
case 2504:
case 3992:
case 127:
case 1678:
case 3487:
case 3242:
case 3329:
case 527:
case 2619:
case 3363:
case 300:
case 2752:
case 329:
case 951:
case 543:
case 2259:
case 1405:
case 1265:
case 3994:
case 548:
case 3166:
case 1404:
case 1271:
case 2881:
case 831:
case 3649:
case 886:
case 3082:
case 1859:
case 2530:
case 3269:
case 2001:
case 2082:
case 1042:
case 2276:
case 4013:
case 854:
case 833:
case 1923:
case 2378:
case 3169:
case 2070:
case 1900:
case 2142:
case 444:
case 2216:
case 2241:
case 2601:
case 2400:
case 3666:
case 859:
case 3379:
case 1315:
case 3310:
case 73:
case 281:
case 3470:
case 1952:
case 375:
case 1173:
case 3158:
case 2748:
case 1380:
case 4064:
case 3740:
case 2594:
case 3239:
case 1010:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1713585601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,];
var gg_b = "1713585601/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
