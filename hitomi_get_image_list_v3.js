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
case 1893:
case 3297:
case 883:
case 2841:
case 3497:
case 2135:
case 2837:
case 2399:
case 893:
case 2941:
case 2184:
case 1993:
case 88:
case 858:
case 2647:
case 3842:
case 1310:
case 667:
case 2587:
case 595:
case 3942:
case 3738:
case 2381:
case 1352:
case 1602:
case 3700:
case 2263:
case 2477:
case 644:
case 2277:
case 2203:
case 847:
case 971:
case 302:
case 827:
case 509:
case 2815:
case 1073:
case 2457:
case 811:
case 1849:
case 2533:
case 1828:
case 1067:
case 2020:
case 968:
case 556:
case 1928:
case 1391:
case 1949:
case 630:
case 2117:
case 270:
case 2826:
case 282:
case 845:
case 2744:
case 3359:
case 550:
case 1150:
case 2062:
case 752:
case 3178:
case 1188:
case 1452:
case 2281:
case 3649:
case 3628:
case 2721:
case 2186:
case 1410:
case 2592:
case 997:
case 1112:
case 2755:
case 1210:
case 2961:
case 3802:
case 2123:
case 4016:
case 401:
case 4051:
case 3282:
case 3939:
case 985:
case 3180:
case 2673:
case 3158:
case 2607:
case 3218:
case 3839:
case 995:
case 2775:
case 4025:
case 3902:
case 640:
case 835:
case 1291:
case 1642:
case 3259:
case 1491:
case 65:
case 646:
case 1518:
case 698:
case 923:
case 2516:
case 2551:
case 3572:
case 3024:
case 119:
case 1196:
case 571:
case 3510:
case 1729:
case 1809:
case 1748:
case 1932:
case 1289:
case 3279:
case 837:
case 909:
case 2924:
case 1869:
case 950:
case 2363:
case 2746:
case 2704:
case 3795:
case 777:
case 1909:
case 1446:
case 144:
case 3327:
case 1935:
case 1204:
case 2054:
case 1464:
case 4095:
case 1141:
case 1984:
case 3792:
case 1690:
case 3555:
case 1513:
case 2448:
case 2229:
case 2789:
case 2522:
case 706:
case 2308:
case 3854:
case 1534:
case 1645:
case 130:
case 1306:
case 759:
case 46:
case 3954:
case 1585:
case 136:
case 494:
case 3575:
case 3725:
case 3285:
case 1275:
case 2540:
case 33:
case 165:
case 1475:
case 1656:
case 3865:
case 1611:
case 3965:
case 1799:
case 3716:
case 3434:
case 3751:
case 902:
case 3173:
case 3905:
case 1183:
case 4022:
case 2710:
case 1455:
case 3686:
case 3413:
case 2005:
case 3094:
case 112:
case 3213:
case 1817:
case 2595:
case 3771:
case 1781:
case 2678:
case 1221:
case 2128:
case 1244:
case 205:
case 1206:
case 2950:
case 1266:
case 126:
case 2988:
case 3617:
case 2888:
case 2468:
case 3070:
case 1161:
case 1101:
case 1986:
case 2912:
case 2408:
case 704:
case 2970:
case 1536:
case 153:
case 1605:
case 486:
case 2329:
case 1923:
case 207:
case 480:
case 2076:
case 428:
case 1665:
case 385:
case 3811:
case 2348:
case 3012:
case 3956:
case 3911:
case 4060:
case 3227:
case 490:
case 1304:
case 496:
case 1763:
case 1346:
case 3050:
case 4000:
case 2870:
case 3088:
case 2500:
case 1321:
case 4038:
case 2896:
case 289:
case 3147:
case 3436:
case 3714:
case 2996:
case 299:
case 3945:
case 457:
case 3236:
case 323:
case 1355:
case 3334:
case 2045:
case 1674:
case 3733:
case 2109:
case 34:
case 1375:
case 3506:
case 3544:
case 3635:
case 2169:
case 455:
case 2788:
case 1671:
case 2249:
case 1415:
case 3453:
case 3681:
case 2750:
case 1121:
case 2449:
case 3331:
case 1226:
case 2712:
case 3541:
case 1957:
case 3776:
case 1786:
case 178:
case 1426:
case 142:
case 3347:
case 808:
case 2332:
case 3467:
case 1283:
case 3887:
case 1723:
case 3207:
case 3267:
case 1651:
case 2682:
case 4020:
case 2770:
case 3134:
case 1625:
case 2369:
case 1963:
case 476:
case 3185:
case 2309:
case 1903:
case 1175:
case 2618:
case 3987:
case 1977:
case 3756:
case 1097:
case 3814:
case 2659:
case 1798:
case 3643:
case 2033:
case 1567:
case 1301:
case 639:
case 1573:
case 3745:
case 279:
case 2796:
case 1507:
case 3790:
case 2129:
case 1441:
case 2493:
case 352:
case 3526:
case 1241:
case 2293:
case 1104:
case 1237:
case 2409:
case 3091:
case 2469:
case 2697:
case 2232:
case 3373:
case 1424:
case 1383:
case 3367:
case 1224:
case 3501:
case 2130:
case 3992:
case 1784:
case 3089:
case 1079:
case 313:
case 2539:
case 1843:
case 3247:
case 2092:
case 2991:
case 3431:
case 1315:
case 3353:
case 3603:
case 3663:
case 3052:
case 3816:
case 900:
case 4002:
case 2972:
case 2794:
case 3825:
case 3705:
case 3951:
case 1547:
case 1341:
case 2393:
case 3524:
case 3072:
case 649:
case 1082:
case 201:
case 2852:
case 2051:
case 2168:
case 1261:
case 629:
case 3657:
case 2910:
case 116:
case 2810:
case 2952:
case 1106:
case 3971:
case 1717:
case 3075:
case 2217:
case 2855:
case 2417:
case 815:
case 1396:
case 2761:
case 750:
case 74:
case 977:
case 2022:
case 2574:
case 1494:
case 3055:
case 1013:
case 862:
case 4005:
case 2975:
case 2103:
case 2554:
case 3762:
case 2627:
case 2163:
case 785:
case 3940:
case 4054:
case 3046:
case 304:
case 2095:
case 3594:
case 2505:
case 2636:
case 1312:
case 678:
case 952:
case 3358:
case 2724:
case 3895:
case 2846:
case 2284:
case 1709:
case 2040:
case 26:
case 294:
case 1769:
case 1578:
case 3588:
case 733:
case 2038:
case 489:
case 3629:
case 3512:
case 1793:
case 873:
case 1930:
case 257:
case 1189:
case 1394:
case 3179:
case 4090:
case 129:
case 4045:
case 3838:
case 3219:
case 1580:
case 3159:
case 610:
case 2317:
case 2298:
case 771:
case 3938:
case 1191:
case 3742:
case 575:
case 2143:
case 1640:
case 2511:
case 255:
case 2498:
case 3960:
case 405:
case 4056:
case 3006:
case 300:
case 3044:
case 3066:
case 3118:
case 2685:
case 1519:
case 1622:
case 3258:
case 3720:
case 2199:
case 3280:
case 2423:
case 2634:
case 359:
case 3458:
case 3182:
case 991:
case 3480:
case 3860:
case 2223:
case 2590:
case 1412:
case 1908:
case 2486:
case 286:
case 1212:
case 272:
case 407:
case 280:
case 2726:
case 552:
case 228:
case 1868:
case 2715:
case 1152:
case 1488:
case 2181:
case 2906:
case 296:
case 2966:
case 3278:
case 1749:
case 1250:
case 2000:
case 1808:
case 42:
case 355:
case 3511:
case 2742:
case 44:
case 456:
case 3298:
case 183:
case 1936:
case 2219:
case 409:
case 1523:
case 1030:
case 2419:
case 1305:
case 1290:
case 1586:
case 357:
case 1192:
case 3741:
case 2629:
case 1664:
case 19:
case 3038:
case 1354:
case 3000:
case 4088:
case 3966:
case 390:
case 3906:
case 3944:
case 1753:
case 495:
case 3715:
case 328:
case 3286:
case 4012:
case 485:
case 1276:
case 372:
case 3806:
case 3844:
case 348:
case 1476:
case 147:
case 1151:
case 2480:
case 111:
case 3223:
case 2860:
case 579:
case 3634:
case 3783:
case 3384:
case 3423:
case 2800:
case 1008:
case 2258:
case 1411:
case 3685:
case 206:
case 2118:
case 2044:
case 200:
case 125:
case 2762:
case 3163:
case 799:
case 3554:
case 1187:
case 3177:
case 1985:
case 2702:
case 2822:
case 454:
case 3975:
case 1885:
case 2922:
case 2055:
case 2739:
case 1390:
case 433:
case 789:
case 468:
case 1934:
case 3157:
case 3574:
case 3955:
case 471:
case 1345:
case 1606:
case 160:
case 1644:
case 1813:
case 3217:
case 166:
case 1666:
case 3855:
case 3921:
case 3946:
case 1356:
case 3040:
case 36:
case 3235:
case 1474:
case 819:
case 3284:
case 501:
case 3846:
case 3724:
case 338:
case 3565:
case 137:
case 3636:
case 3505:
case 2594:
case 979:
case 3095:
case 1254:
case 204:
case 2046:
case 2378:
case 1454:
case 2940:
case 707:
case 2064:
case 955:
case 2431:
case 3328:
case 3991:
case 647:
case 3891:
case 3539:
case 2447:
case 627:
case 1859:
case 213:
case 2089:
case 2774:
case 2992:
case 3130:
case 3432:
case 2367:
case 1320:
case 611:
case 2307:
case 782:
case 3989:
case 2373:
case 625:
case 836:
case 830:
case 2892:
case 1569:
case 3025:
case 2971:
case 3952:
case 56:
case 1099:
case 4061:
case 986:
case 2657:
case 3051:
case 3852:
case 301:
case 584:
case 2072:
case 4001:
case 3393:
case 68:
case 812:
case 1439:
case 291:
case 2951:
case 3972:
case 7:
case 1239:
case 1982:
case 867:
case 2825:
case 3794:
case 1882:
case 2925:
case 1081:
case 1462:
case 3872:
case 3071:
case 1160:
case 2663:
case 2816:
case 281:
case 1202:
case 2052:
case 2603:
case 635:
case 2756:
case 3309:
case 2185:
case 3542:
case 826:
case 751:
case 3369:
case 820:
case 888:
case 2407:
case 2134:
case 1672:
case 1780:
case 1758:
case 2267:
case 1220:
case 2207:
case 1057:
case 1122:
case 2467:
case 2347:
case 774:
case 4026:
case 2776:
case 853:
case 2541:
case 1593:
case 4015:
case 1077:
case 2331:
case 3449:
case 1003:
case 1652:
case 3249:
case 3788:
case 2681:
case 1778:
case 596:
case 2833:
case 1549:
case 4037:
case 1362:
case 590:
case 2515:
case 1997:
case 572:
case 252:
case 528:
case 984:
case 1339:
case 3148:
case 2914:
case 3796:
case 2745:
case 3033:
case 1140:
case 666:
case 1691:
case 1442:
case 1242:
case 660:
case 3870:
case 1460:
case 1880:
case 2050:
case 1200:
case 1162:
case 3538:
case 1260:
case 1400:
case 738:
case 2956:
case 2787:
case 2012:
case 3348:
case 2811:
case 1139:
case 1086:
case 108:
case 3076:
case 307:
case 3970:
case 861:
case 3408:
case 3912:
case 459:
case 297:
case 76:
case 3850:
case 794:
case 3468:
case 1878:
case 1978:
case 3988:
case 406:
case 2876:
case 4006:
case 305:
case 3056:
case 3812:
case 3011:
case 1797:
case 2506:
case 250:
case 974:
case 256:
case 24:
case 615:
case 2890:
case 3132:
case 2733:
case 621:
case 2096:
case 3045:
case 1919:
case 223:
case 617:
case 2945:
case 3996:
case 2436:
case 662:
case 1238:
case 3560:
case 3896:
case 3500:
case 2698:
case 2575:
case 1440:
case 2954:
case 1759:
case 1696:
case 169:
case 1084:
case 1779:
case 3789:
case 790:
case 2555:
case 3448:
case 832:
case 2974:
case 2874:
case 2521:
case 4046:
case 1300:
case 786:
case 1360:
case 4064:
case 728:
case 1338:
case 2564:
case 976:
case 2153:
case 574:
case 3595:
case 1688:
case 2504:
case 4021:
case 254:
case 970:
case 3678:
case 3005:
case 673:
case 4055:
case 2336:
case 2413:
case 2686:
case 1548:
case 3710:
case 3994:
case 1782:
case 1670:
case 3680:
case 631:
case 271:
case 2716:
case 1120:
case 2167:
case 2623:
case 755:
case 1422:
case 2234:
case 2485:
case 1718:
case 67:
case 2865:
case 3540:
case 2285:
case 3894:
case 2805:
case 2418:
case 1543:
case 2902:
case 1156:
case 2839:
case 779:
case 1425:
case 2962:
case 2862:
case 2061:
case 2482:
case 1683:
case 141:
case 2180:
case 3299:
case 3673:
case 839:
case 3499:
case 2001:
case 2722:
case 2802:
case 4072:
case 1251:
case 907:
case 3667:
case 4010:
case 3961:
case 1626:
case 162:
case 491:
case 1713:
case 318:
case 3186:
case 1176:
case 3592:
case 3721:
case 905:
case 481:
case 3481:
case 3653:
case 1615:
case 3861:
case 1471:
case 3303:
case 3377:
case 2552:
case 1581:
case 2795:
case 3704:
case 3363:
case 2479:
case 1292:
case 1190:
case 2693:
case 413:
case 608:
case 1492:
case 2024:
case 2572:
case 3551:
case 351:
case 2119:
case 1009:
case 3198:
case 1847:
case 3525:
case 4091:
case 41:
case 1563:
case 3631:
case 2738:
case 3587:
case 1577:
case 2041:
case 1214:
case 1093:
case 3647:
case 1736:
case 1414:
case 849:
case 3941:
case 1557:
case 3399:
case 3837:
case 829:
case 131:
case 1316:
case 2669:
case 701:
case 3937:
case 2297:
case 3841:
case 3042:
case 3915:
case 2359:
case 3117:
case 3744:
case 370:
case 3343:
case 3766:
case 3926:
case 2083:
case 3257:
case 1853:
case 3815:
case 1661:
case 1967:
case 2920:
case 1165:
case 1973:
case 3514:
case 1907:
case 1727:
case 3883:
case 1287:
case 1049:
case 3403:
case 3477:
case 3034:
case 1668:
case 3396:
case 978:
case 1319:
case 922:
case 266:
case 2813:
case 1075:
case 260:
case 2535:
case 2644:
case 3600:
case 2985:
case 3660:
case 2834:
case 818:
case 2934:
case 532:
case 2265:
case 3494:
case 2405:
case 2465:
case 3013:
case 2205:
case 1055:
case 3294:
case 2390:
case 2747:
case 1594:
case 2376:
case 677:
case 1840:
case 2048:
case 3638:
case 874:
case 753:
case 2254:
case 1046:
case 3388:
case 675:
case 4035:
case 3848:
case 2311:
case 2356:
case 235:
case 798:
case 3769:
case 1995:
case 510:
case 2274:
case 1380:
case 1358:
case 726:
case 4084:
case 2474:
case 851:
case 469:
case 746:
case 2133:
case 28:
case 3930:
case 2192:
case 3793:
case 258:
case 2586:
case 578:
case 1629:
case 3036:
case 303:
case 691:
case 1179:
case 2305:
case 3189:
case 1550:
case 264:
case 1588:
case 2604:
case 3578:
case 8:
case 29:
case 3830:
case 283:
case 3640:
case 1742:
case 1938:
case 30:
case 329:
case 2936:
case 1570:
case 3580:
case 3558:
case 1219:
case 932:
case 349:
case 1800:
case 2767:
case 892:
case 2008:
case 3519:
case 2707:
case 1860:
case 2116:
case 730:
case 1182:
case 159:
case 3172:
case 2125:
case 2211:
case 1044:
case 100:
case 225:
case 876:
case 1960:
case 1900:
case 2411:
case 245:
case 882:
case 2456:
case 1118:
case 1066:
case 106:
case 2171:
case 3450:
case 3488:
case 2753:
case 514:
case 3868:
case 3728:
case 3250:
case 3749:
case 1278:
case 2476:
case 3110:
case 3908:
case 3212:
case 2593:
case 3786:
case 1541:
case 1113:
case 3155:
case 3226:
case 322:
case 807:
case 503:
case 342:
case 3426:
case 1537:
case 2652:
case 4049:
case 1681:
case 2778:
case 3671:
case 3857:
case 2003:
case 3121:
case 3215:
case 3963:
case 719:
case 1756:
case 1711:
case 1987:
case 3175:
case 1207:
case 3723:
case 529:
case 2057:
case 3803:
case 1887:
case 1467:
case 2780:
case 1407:
case 2758:
case 3863:
case 2220:
case 3301:
case 2719:
case 3567:
case 47:
case 3097:
case 1643:
case 3798:
case 2140:
case 2442:
case 2362:
case 2195:
case 3146:
case 3553:
case 2997:
case 2528:
case 3237:
case 2302:
case 2549:
case 2339:
case 1933:
case 473:
case 2689:
case 2897:
case 3241:
case 4093:
case 1526:
case 903:
case 1307:
case 539:
case 2979:
case 1561:
case 3424:
case 3784:
case 3224:
case 2320:
case 1367:
case 2043:
case 1091:
case 606:
case 11:
case 4009:
case 3735:
case 1754:
case 3943:
case 90:
case 1231:
case 1353:
case 3315:
case 2959:
case 2859:
case 1136:
case 3079:
case 949:
case 332:
case 1089:
case 1247:
case 3843:
case 929:
case 1951:
case 3547:
case 417:
case 2982:
case 1705:
case 2818:
case 3341:
case 1010:
case 462:
case 1603:
case 2100:
case 2918:
case 3899:
case 2402:
case 1677:
case 2462:
case 3337:
case 1816:
case 1851:
case 1052:
case 2160:
case 3018:
case 316:
case 3166:
case 1971:
case 2569:
case 3144:
case 415:
case 3201:
case 3461:
case 1524:
case 2099:
case 2532:
case 3261:
case 1555:
case 1974:
case 3690:
case 3141:
case 2779:
case 4029:
case 602:
case 4048:
case 3835:
case 2360:
case 3137:
case 344:
case 3404:
case 2495:
case 3884:
case 1521:
case 3246:
case 2300:
case 2295:
case 3204:
case 435:
case 2240:
case 2142:
case 3585:
case 2440:
case 2084:
case 3645:
case 3534:
case 2120:
case 1167:
case 3799:
case 801:
case 1173:
case 2670:
case 171:
case 1716:
case 1434:
case 519:
case 3275:
case 466:
case 1285:
case 1805:
case 2017:
case 1865:
case 3475:
case 13:
case 2718:
case 1153:
case 2650:
case 3221:
case 703:
case 3917:
case 1504:
case 1546:
case 1564:
case 1413:
case 367:
case 3455:
case 2529:
case 2612:
case 1213:
case 1336:
case 3161:
case 4008:
case 2878:
case 411:
case 3757:
case 2023:
case 1976:
case 3986:
case 3101:
case 3466:
case 35:
case 346:
case 3206:
case 320:
case 3266:
case 445:
case 340:
case 3406:
case 2102:
case 1227:
case 2260:
case 3823:
case 1787:
case 3777:
case 1911:
case 195:
case 1956:
case 2880:
case 3078:
case 1427:
case 2162:
case 1050:
case 3763:
case 2200:
case 2395:
case 3304:
case 2694:
case 353:
case 1012:
case 2139:
case 427:
case 3665:
case 2086:
case 208:
case 458:
case 1436:
case 1147:
case 1313:
case 3355:
case 3898:
case 3654:
case 464:
case 1131:
case 3527:
case 1566:
case 2098:
case 1890:
case 2797:
case 4030:
case 109:
case 1334:
case 493:
case 2508:
case 3674:
case 3019:
case 671:
case 2316:
case 2433:
case 716:
case 598:
case 2174:
case 1632:
case 3993:
case 2557:
case 3730:
case 1318:
case 520:
case 63:
case 1609:
case 546:
case 924:
case 1669:
case 540:
case 855:
case 526:
case 944:
case 1738:
case 1942:
case 936:
case 2154:
case 2563:
case 1037:
case 2371:
case 930:
case 553:
case 633:
case 273:
case 2414:
case 668:
case 3310:
case 2214:
case 1041:
case 1842:
case 102:
case 2105:
case 3194:
case 848:
case 886:
case 880:
case 872:
case 2967:
case 828:
case 2392:
case 3639:
case 2165:
case 965:
case 2028:
case 890:
case 1820:
case 2487:
case 1760:
case 2727:
case 3053:
case 3662:
case 1015:
case 4003:
case 2287:
case 3949:
case 3391:
case 3928:
case 4057:
case 912:
case 2661:
case 3768:
case 2853:
case 3828:
case 3849:
case 3112:
case 2713:
case 217:
case 2176:
case 623:
case 3579:
case 2626:
case 262:
case 643:
case 714:
case 2314:
case 3452:
case 3188:
case 926:
case 2615:
case 2471:
case 940:
case 3252:
case 988:
case 946:
case 95:
case 1628:
case 524:
case 2271:
case 1397:
case 1418:
case 2543:
case 2785:
case 1591:
case 215:
case 2225:
case 2111:
case 1939:
case 2333:
case 3272:
case 3620:
case 1001:
case 2251:
case 1802:
case 1158:
case 3472:
case 1061:
case 609:
case 3170:
case 953:
case 2416:
case 241:
case 884:
case 2032:
case 2831:
case 697:
case 3582:
case 2847:
case 761:
case 3291:
case 4043:
case 86:
case 3518:
case 687:
case 3491:
case 2009:
case 3642:
case 1552:
case 1795:
case 2581:
case 3832:
case 3031:
case 2387:
case 685:
case 1279:
case 3289:
case 1693:
case 3932:
case 3748:
case 3729:
case 2492:
case 567:
case 3869:
case 3489:
case 838:
case 2292:
case 3047:
case 512:
case 2170:
case 1299:
case 3451:
case 3683:
case 341:
case 3734:
case 1607:
case 908:
case 321:
case 2272:
case 3333:
case 3111:
case 315:
case 1775:
case 2559:
case 1281:
case 1721:
case 1002:
case 1801:
case 3471:
case 1062:
case 3615:
case 1653:
case 2452:
case 3626:
case 2210:
case 2579:
case 699:
case 317:
case 1039:
case 2112:
case 3292:
case 2869:
case 2489:
case 1924:
case 607:
case 2809:
case 432:
case 2932:
case 2289:
case 2031:
case 2909:
case 174:
case 1704:
case 1824:
case 1571:
case 3581:
case 3637:
case 1198:
case 3931:
case 2642:
case 1443:
case 2491:
case 3069:
case 3847:
case 2291:
case 151:
case 1551:
case 2582:
case 219:
case 3599:
case 969:
case 3414:
case 373:
case 1647:
case 3371:
case 3563:
case 1381:
case 1:
case 1587:
case 414:
case 1937:
case 3325:
case 1135:
case 37:
case 1042:
case 1841:
case 2893:
case 3174:
case 1399:
case 2730:
case 3624:
case 3351:
case 3316:
case 331:
case 1837:
case 2849:
case 859:
case 2828:
case 3661:
case 1257:
case 1926:
case 2073:
case 1826:
case 170:
case 182:
case 1744:
case 1117:
case 3953:
case 1915:
case 2597:
case 2928:
case 176:
case 1343:
case 2391:
case 2949:
case 3873:
case 1463:
case 3807:
case 3727:
case 1203:
case 1263:
case 3867:
case 2602:
case 1403:
case 442:
case 2639:
case 1514:
case 2194:
case 2389:
case 107:
case 1329:
case 2665:
case 3139:
case 1348:
case 3694:
case 2605:
case 877:
case 941:
case 3980:
case 3958:
case 3858:
case 3200:
case 234:
case 2763:
case 2346:
case 3460:
case 2078:
case 737:
case 3400:
case 4027:
case 2823:
case 3260:
case 1538:
case 2364:
case 1950:
case 875:
case 2406:
case 1988:
case 226:
case 57:
case 1011:
case 1812:
case 1056:
case 220:
case 3340:
case 2206:
case 105:
case 288:
case 25:
case 2466:
case 3530:
case 3023:
case 2757:
case 2101:
case 735:
case 2986:
case 1408:
case 1468:
case 962:
case 1888:
case 651:
case 1850:
case 2058:
case 2161:
case 1430:
case 3322:
case 766:
case 449:
case 1132:
case 1230:
case 1045:
case 2124:
case 40:
case 3797:
case 3098:
case 2375:
case 1896:
case 1560:
case 3819:
case 1500:
case 2654:
case 618:
case 3919:
case 1996:
case 199:
case 3696:
case 1368:
case 2534:
case 2645:
case 541:
case 692:
case 1074:
case 1619:
case 3084:
case 745:
case 3440:
case 676:
case 1791:
case 3142:
case 2366:
case 2585:
case 2743:
case 3240:
case 711:
case 3035:
case 747:
case 1054:
case 3295:
case 224:
case 3300:
case 727:
case 2935:
case 2264:
case 1229:
case 2835:
case 1248:
case 562:
case 2690:
case 1193:
case 2141:
case 1429:
case 813:
case 1448:
case 4013:
case 764:
case 1005:
case 1710:
case 891:
case 3612:
case 1065:
case 2455:
case 78:
case 1128:
case 1149:
case 3338:
case 1678:
case 2917:
case 1595:
case 3688:
case 1752:
case 265:
case 2475:
case 2611:
case 2275:
case 1658:
case 3670:
case 3782:
case 1330:
case 439:
case 1539:
case 4047:
case 686:
case 648:
case 2843:
case 672:
case 680:
case 2614:
case 2079:
case 232:
case 3859:
case 4031:
case 983:
case 3959:
case 1562:
case 1502:
case 3138:
case 696:
case 1328:
case 964:
case 1697:
case 566:
case 99:
case 1269:
case 1432:
case 1130:
case 98:
case 2383:
case 1232:
case 1989:
case 1108:
case 2261:
case 947:
case 3099:
case 2082:
case 2461:
case 101:
case 1016:
case 2201:
case 83:
case 1952:
case 2717:
case 731:
case 1025:
case 2144:
case 2018:
case 3342:
case 1810:
case 535:
case 655:
case 3160:
case 1071:
case 1872:
case 3462:
case 3081:
case 773:
case 3402:
case 2899:
case 3918:
case 854:
case 2531:
case 3262:
case 3100:
case 945:
case 537:
case 1393:
case 657:
case 3818:
case 3982:
case 868:
case 2483:
case 261:
case 3758:
case 2324:
case 897:
case 4067:
case 1770:
case 2283:
case 1332:
case 4073:
case 2803:
case 2175:
case 1309:
case 2963:
case 1369:
case 2857:
case 3003:
case 1428:
case 0:
case 4053:
case 1087:
case 59:
case 960:
case 1788:
case 1249:
case 2415:
case 1228:
case 3063:
case 3652:
case 885:
case 663:
case 3610:
case 222:
case 2226:
case 1712:
case 2155:
case 2786:
case 278:
case 3593:
case 2957:
case 527:
case 1293:
case 3689:
case 1014:
case 547:
case 3339:
case 1129:
case 2441:
case 2164:
case 717:
case 3528:
case 2237:
case 935:
case 2553:
case 3997:
case 762:
case 2437:
case 214:
case 2146:
case 82:
case 545:
case 3691:
case 3140:
case 721:
case 2798:
case 3242:
case 856:
case 84:
case 2097:
case 525:
case 179:
case 1796:
case 2361:
case 2573:
case 3719:
case 715:
case 249:
case 393:
case 3936:
case 4019:
case 229:
case 2296:
case 3245:
case 3030:
case 3523:
case 1498:
case 155:
case 3836:
case 1298:
case 1317:
case 3604:
case 2695:
case 1737:
case 2036:
case 1741:
case 3192:
case 1576:
case 38:
case 3586:
case 2793:
case 2212:
case 1844:
case 172:
case 180:
case 1726:
case 2968:
case 1286:
case 128:
case 2412:
case 802:
case 2908:
case 347:
case 186:
case 3655:
case 148:
case 1613:
case 1486:
case 2749:
case 196:
case 1966:
case 434:
case 3621:
case 2728:
case 3354:
case 2808:
case 1060:
case 3753:
case 3171:
case 1944:
case 1181:
case 2450:
case 190:
case 3598:
case 426:
case 3456:
case 345:
case 1335:
case 420:
case 769:
case 488:
case 45:
case 2172:
case 1783:
case 1545:
case 498:
case 3827:
case 3068:
case 311:
case 3151:
case 3008:
case 3767:
case 2622:
case 4058:
case 3390:
case 2294:
case 3205:
case 3465:
case 2494:
case 3934:
case 467:
case 1103:
case 1975:
case 2600:
case 1177:
case 3535:
case 360:
case 465:
case 2085:
case 3666:
case 1217:
case 3813:
case 1955:
case 1701:
case 1022:
case 1821:
case 1574:
case 679:
case 1761:
case 239:
case 2034:
case 1323:
case 3474:
case 1864:
case 1484:
case 1804:
case 1846:
case 2370:
case 3274:
case 1435:
case 1904:
case 1946:
case 194:
case 2829:
case 1964:
case 3311:
case 2388:
case 2638:
case 3731:
case 3454:
case 3048:
case 3376:
case 1565:
case 1386:
case 138:
case 1636:
case 3747:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1766556002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,];
var gg_b = "1766556002/";

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
