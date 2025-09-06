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
var o = 0;
switch (g) {
case 3461:
case 1163:
case 348:
case 1295:
case 1603:
case 2157:
case 610:
case 790:
case 3452:
case 666:
case 1988:
case 1005:
case 179:
case 2660:
case 3146:
case 1311:
case 2664:
case 1054:
case 787:
case 729:
case 1071:
case 1907:
case 2592:
case 257:
case 545:
case 3023:
case 269:
case 700:
case 3627:
case 2706:
case 1950:
case 2328:
case 3730:
case 2332:
case 1096:
case 290:
case 1203:
case 810:
case 2329:
case 2260:
case 1206:
case 1093:
case 951:
case 2869:
case 1501:
case 2795:
case 3225:
case 115:
case 769:
case 1996:
case 3227:
case 372:
case 1182:
case 2892:
case 287:
case 453:
case 2734:
case 1485:
case 387:
case 2227:
case 2133:
case 272:
case 300:
case 1630:
case 874:
case 3264:
case 1849:
case 533:
case 2225:
case 1244:
case 3869:
case 3795:
case 589:
case 748:
case 59:
case 3329:
case 673:
case 2627:
case 3568:
case 3342:
case 3569:
case 1914:
case 369:
case 674:
case 772:
case 1010:
case 357:
case 1230:
case 4012:
case 2026:
case 3660:
case 1234:
case 3100:
case 1838:
case 873:
case 1727:
case 1839:
case 928:
case 122:
case 2923:
case 1014:
case 2143:
case 985:
case 248:
case 3339:
case 3322:
case 3870:
case 3057:
case 1716:
case 2377:
case 3338:
case 163:
case 3000:
case 2645:
case 3055:
case 1842:
case 2943:
case 1110:
case 1747:
case 2235:
case 3862:
case 326:
case 2616:
case 3281:
case 3899:
case 2017:
case 3765:
case 2724:
case 3278:
case 3851:
case 273:
case 3874:
case 2123:
case 3898:
case 1735:
case 2247:
case 3253:
case 436:
case 3690:
case 2936:
case 3883:
case 101:
case 2458:
case 3570:
case 2459:
case 1832:
case 123:
case 556:
case 2933:
case 1829:
case 4018:
case 3599:
case 51:
case 2216:
case 773:
case 3681:
case 482:
case 164:
case 1392:
case 3551:
case 1220:
case 3598:
case 4019:
case 3678:
case 3349:
case 2349:
case 2562:
case 4080:
case 3033:
case 2679:
case 2678:
case 3213:
case 2694:
case 2348:
case 3036:
case 2598:
case 3635:
case 1790:
case 2599:
case 3216:
case 1794:
case 3459:
case 3933:
case 657:
case 3511:
case 3491:
case 1193:
case 829:
case 2883:
case 4091:
case 1982:
case 3458:
case 1265:
case 2690:
case 1781:
case 1267:
case 374:
case 1196:
case 3247:
case 669:
case 690:
case 2278:
case 373:
case 710:
case 3476:
case 3237:
case 4076:
case 766:
case 2898:
case 1189:
case 2899:
case 1756:
case 2900:
case 2279:
case 3946:
case 3015:
case 1171:
case 3473:
case 226:
case 1154:
case 3616:
case 2767:
case 2281:
case 3943:
case 3235:
case 1066:
case 600:
case 2055:
case 3645:
case 3917:
case 3377:
case 687:
case 629:
case 3811:
case 3720:
case 1107:
case 2290:
case 2583:
case 2322:
case 857:
case 1667:
case 2870:
case 2057:
case 2612:
case 2139:
case 1307:
case 3866:
case 2464:
case 1011:
case 565:
case 249:
case 558:
case 1843:
case 4027:
case 3427:
case 3101:
case 1536:
case 355:
case 1817:
case 1354:
case 646:
case 1533:
case 3652:
case 990:
case 730:
case 3323:
case 2460:
case 1388:
case 3563:
case 1396:
case 281:
case 588:
case 3708:
case 957:
case 1631:
case 525:
case 1546:
case 1833:
case 2932:
case 2929:
case 230:
case 3261:
case 846:
case 1497:
case 3785:
case 2148:
case 385:
case 1517:
case 1168:
case 768:
case 2252:
case 285:
case 45:
case 755:
case 1434:
case 2785:
case 3148:
case 228:
case 3928:
case 1983:
case 521:
case 2261:
case 117:
case 53:
case 3932:
case 1504:
case 503:
case 330:
case 1555:
case 416:
case 3212:
case 1430:
case 3028:
case 593:
case 3029:
case 3042:
case 1970:
case 1208:
case 499:
case 547:
case 1804:
case 2652:
case 2326:
case 255:
case 1310:
case 268:
case 512:
case 1051:
case 2661:
case 1314:
case 87:
case 1857:
case 3942:
case 1752:
case 2175:
case 4072:
case 2863:
case 409:
case 349:
case 1999:
case 1287:
case 1444:
case 3138:
case 1800:
case 1855:
case 4064:
case 1998:
case 2866:
case 3741:
case 3464:
case 1974:
case 1420:
case 3814:
case 2901:
case 3022:
case 868:
case 3357:
case 514:
case 2702:
case 16:
case 2075:
case 2413:
case 2889:
case 150:
case 3938:
case 2315:
case 1151:
case 4053:
case 2888:
case 3922:
case 2001:
case 1174:
case 27:
case 3142:
case 2259:
case 143:
case 1424:
case 1162:
case 2291:
case 4056:
case 3456:
case 1992:
case 973:
case 3481:
case 828:
case 3618:
case 2273:
case 1784:
case 3619:
case 2276:
case 3949:
case 668:
case 4078:
case 2550:
case 4094:
case 3494:
case 1969:
case 1758:
case 3479:
case 3948:
case 496:
case 107:
case 2336:
case 2571:
case 3490:
case 77:
case 4090:
case 475:
case 2333:
case 2589:
case 1780:
case 2658:
case 3049:
case 180:
case 1202:
case 3048:
case 2659:
case 2588:
case 1382:
case 2048:
case 3588:
case 3589:
case 3658:
case 3554:
case 1718:
case 651:
case 2490:
case 3684:
case 2510:
case 3336:
case 471:
case 2479:
case 3276:
case 3437:
case 2949:
case 926:
case 2478:
case 3550:
case 3896:
case 2494:
case 3435:
case 2619:
case 830:
case 2481:
case 3893:
case 3273:
case 246:
case 3258:
case 3871:
case 3317:
case 3854:
case 2456:
case 2810:
case 851:
case 37:
case 4045:
case 2142:
case 3259:
case 3447:
case 2453:
case 2922:
case 3889:
case 2938:
case 746:
case 966:
case 1621:
case 4013:
case 2300:
case 910:
case 2355:
case 3807:
case 3702:
case 3343:
case 4016:
case 2022:
case 2357:
case 2218:
case 2038:
case 3763:
case 1020:
case 771:
case 1743:
case 2125:
case 3422:
case 2947:
case 2615:
case 4039:
case 3604:
case 3953:
case 2127:
case 2841:
case 977:
case 2945:
case 3956:
case 2475:
case 3509:
case 838:
case 3657:
case 1920:
case 1715:
case 2373:
case 542:
case 2401:
case 2376:
case 103:
case 3600:
case 1024:
case 1140:
case 121:
case 3655:
case 1717:
case 1130:
case 3081:
case 446:
case 2215:
case 2541:
case 2035:
case 3990:
case 2384:
case 104:
case 3809:
case 3078:
case 578:
case 2391:
case 3319:
case 147:
case 3885:
case 1736:
case 3981:
case 3257:
case 1512:
case 2243:
case 3978:
case 3255:
case 2937:
case 3782:
case 4048:
case 3448:
case 3200:
case 2246:
case 638:
case 3887:
case 3246:
case 2979:
case 3380:
case 2994:
case 1266:
case 2257:
case 3243:
case 3935:
case 2090:
case 1263:
case 1195:
case 371:
case 3358:
case 2078:
case 2:
case 3384:
case 2809:
case 2808:
case 2081:
case 165:
case 660:
case 2655:
case 809:
case 616:
case 3531:
case 796:
case 1666:
case 936:
case 1321:
case 3376:
case 3047:
case 1663:
case 820:
case 1067:
case 3643:
case 3373:
case 899:
case 1282:
case 2956:
case 188:
case 3013:
case 2172:
case 4075:
case 3475:
case 1965:
case 1700:
case 2508:
case 3233:
case 3841:
case 2766:
case 3617:
case 2164:
case 3016:
case 2422:
case 88:
case 2439:
case 3615:
case 2438:
case 4077:
case 3236:
case 65:
case 1671:
case 2707:
case 2064:
case 3025:
case 1903:
case 1584:
case 1411:
case 2072:
case 3113:
case 760:
case 1906:
case 940:
case 1559:
case 696:
case 3623:
case 2750:
case 1689:
case 3714:
case 2960:
case 3027:
case 2964:
case 3710:
case 468:
case 1003:
case 1296:
case 984:
case 1167:
case 455:
case 1293:
case 819:
case 2156:
case 2789:
case 1873:
case 3927:
case 1650:
case 2429:
case 875:
case 3135:
case 2432:
case 1859:
case 1858:
case 216:
case 3226:
case 896:
case 1254:
case 1995:
case 260:
case 1891:
case 1997:
case 2194:
case 720:
case 3137:
case 1288:
case 1880:
case 799:
case 1696:
case 806:
case 3521:
case 1693:
case 954:
case 1331:
case 78:
case 1214:
case 1818:
case 871:
case 1034:
case 1385:
case 1387:
case 543:
case 3178:
case 998:
case 2137:
case 192:
case 1309:
case 3793:
case 738:
case 3179:
case 316:
case 2226:
case 1030:
case 360:
case 4028:
case 3428:
case 114:
case 1210:
case 2135:
case 4032:
case 3432:
case 1723:
case 3060:
case 4042:
case 3442:
case 3156:
case 1614:
case 399:
case 3789:
case 3972:
case 1462:
case 1726:
case 3771:
case 1518:
case 671:
case 3964:
case 1519:
case 2925:
case 1474:
case 2147:
case 580:
case 1451:
case 3960:
case 531:
case 238:
case 52:
case 3707:
case 2626:
case 2116:
case 2025:
case 3530:
case 4057:
case 1777:
case 1292:
case 898:
case 511:
case 2973:
case 2161:
case 1320:
case 1872:
case 127:
case 4000:
case 2313:
case 3844:
case 3249:
case 2976:
case 1864:
case 1002:
case 3455:
case 1268:
case 1701:
case 2677:
case 1860:
case 971:
case 3353:
case 2073:
case 3112:
case 4004:
case 2415:
case 426:
case 3356:
case 777:
case 352:
case 1324:
case 2803:
case 2345:
case 10:
case 2597:
case 1692:
case 134:
case 2201:
case 2335:
case 2084:
case 167:
case 336:
case 3919:
case 3649:
case 3379:
case 718:
case 141:
case 2058:
case 2980:
case 159:
case 1109:
case 2337:
case 466:
case 410:
case 382:
case 2277:
case 3834:
case 2897:
case 3238:
case 3019:
case 1560:
case 2768:
case 2959:
case 884:
case 3506:
case 4033:
case 1131:
case 3433:
case 3275:
case 1748:
case 3895:
case 3792:
case 3436:
case 2834:
case 3277:
case 639:
case 3503:
case 2019:
case 2238:
case 919:
case 2222:
case 3980:
case 683:
case 3058:
case 579:
case 2544:
case 474:
case 3201:
case 840:
case 3335:
case 3084:
case 782:
case 2534:
case 3076:
case 515:
case 4017:
case 3417:
case 839:
case 2404:
case 2840:
case 854:
case 2622:
case 3595:
case 2249:
case 1466:
case 2400:
case 2844:
case 736:
case 653:
case 883:
case 2530:
case 4043:
case 1141:
case 3443:
case 2912:
case 254:
case 1813:
case 448:
case 308:
case 95:
case 2364:
case 1041:
case 1407:
case 784:
case 3770:
case 1816:
case 239:
case 2642:
case 852:
case 2820:
case 2711:
case 1454:
case 3799:
case 398:
case 3173:
case 3865:
case 283:
case 2229:
case 3774:
case 1303:
case 1845:
case 1941:
case 505:
case 3176:
case 1488:
case 4023:
case 1121:
case 3423:
case 1611:
case 740:
case 3952:
case 960:
case 3762:
case 1306:
case 1728:
case 652:
case 1496:
case 1732:
case 3184:
case 1835:
case 1931:
case 98:
case 3158:
case 1493:
case 754:
case 2119:
case 1395:
case 909:
case 3180:
case 1031:
case 2524:
case 1211:
case 1334:
case 1085:
case 618:
case 798:
case 1890:
case 1909:
case 3524:
case 1270:
case 132:
case 400:
case 3628:
case 3118:
case 3632:
case 3119:
case 708:
case 1262:
case 1985:
case 1009:
case 384:
case 3242:
case 2786:
case 1878:
case 3520:
case 490:
case 1274:
case 2783:
case 877:
case 564:
case 2762:
case 1340:
case 1670:
case 2176:
case 469:
case 1286:
case 383:
case 2774:
case 3229:
case 457:
case 2799:
case 1283:
case 591:
case 3228:
case 2173:
case 2426:
case 2961:
case 3642:
case 3372:
case 2327:
case 1579:
case 1102:
case 1414:
case 2325:
case 156:
case 3364:
case 1699:
case 3912:
case 354:
case 1651:
case 1698:
case 208:
case 501:
case 403:
case 976:
case 735:
case 43:
case 1721:
case 1142:
case 995:
case 3602:
case 4024:
case 3162:
case 350:
case 1938:
case 2467:
case 55:
case 3199:
case 3198:
case 2823:
case 3151:
case 1453:
case 3170:
case 560:
case 2111:
case 1300:
case 905:
case 36:
case 3420:
case 4020:
case 1219:
case 1039:
case 1218:
case 1814:
case 1022:
case 3202:
case 2382:
case 3092:
case 307:
case 599:
case 1490:
case 2718:
case 494:
case 1478:
case 3968:
case 1949:
case 2221:
case 3791:
case 331:
case 146:
case 1481:
case 404:
case 1129:
case 1132:
case 3784:
case 1435:
case 76:
case 1273:
case 465:
case 2992:
case 2183:
case 2791:
case 2969:
case 1505:
case 924:
case 538:
case 1550:
case 1896:
case 1276:
case 3221:
case 842:
case 1554:
case 1571:
case 3526:
case 963:
case 2092:
case 1336:
case 3719:
case 207:
case 1659:
case 1588:
case 3382:
case 1333:
case 1589:
case 425:
case 642:
case 1416:
case 1805:
case 1343:
case 1901:
case 3363:
case 2420:
case 3111:
case 797:
case 1676:
case 488:
case 617:
case 3366:
case 937:
case 2170:
case 1280:
case 964:
case 1807:
case 2198:
case 1888:
case 3823:
case 780:
case 1447:
case 2151:
case 878:
case 3467:
case 2199:
case 1291:
case 1317:
case 2602:
case 3826:
case 1975:
case 1871:
case 1258:
case 243:
case 17:
case 1445:
case 2440:
case 4006:
case 2804:
case 2062:
case 3406:
case 2208:
case 3389:
case 3533:
case 1323:
case 3388:
case 2209:
case 2970:
case 1582:
case 3536:
case 962:
case 911:
case 168:
case 1101:
case 2074:
case 4003:
case 631:
case 3354:
case 2099:
case 3371:
case 2285:
case 1175:
case 3011:
case 1863:
case 2962:
case 3231:
case 2314:
case 3305:
case 2857:
case 2070:
case 2998:
case 1866:
case 2951:
case 3307:
case 3846:
case 850:
case 571:
case 1177:
case 278:
case 2999:
case 2434:
case 1785:
case 2169:
case 831:
case 3497:
case 2986:
case 3517:
case 82:
case 2608:
case 2504:
case 3241:
case 922:
case 2192:
case 4095:
case 1882:
case 3495:
case 2983:
case 1566:
case 1708:
case 2500:
case 3546:
case 643:
case 1563:
case 807:
case 3543:
case 1028:
case 3083:
case 1212:
case 181:
case 2543:
case 3687:
case 1032:
case 1029:
case 3685:
case 3086:
case 2631:
case 2393:
case 3192:
case 1928:
case 3983:
case 1929:
case 2833:
case 1731:
case 2517:
case 402:
case 1149:
case 3608:
case 2836:
case 4034:
case 3434:
case 1148:
case 3169:
case 2497:
case 3287:
case 4044:
case 2846:
case 3444:
case 3761:
case 1138:
case 378:
case 3999:
case 1741:
case 3855:
case 2307:
case 2305:
case 3857:
case 1942:
case 635:
case 151:
case 3070:
case 506:
case 915:
case 2011:
case 2817:
case 3099:
case 2536:
case 3098:
case 3310:
case 2403:
case 3970:
case 413:
case 3440:
case 4040:
case 3804:
case 3208:
case 2533:
case 1765:
case 1279:
case 2189:
case 705:
case 2421:
case 34:
case 40:
case 1955:
case 3620:
case 2753:
case 3842:
case 3110:
case 1281:
case 2171:
case 553:
case 1862:
case 2963:
case 935:
case 776:
case 1586:
case 2665:
case 1055:
case 615:
case 795:
case 2667:
case 1057:
case 3716:
case 1583:
case 584:
case 3528:
case 2063:
case 427:
case 1653:
case 489:
case 3532:
case 2082:
case 1678:
case 1694:
case 3369:
case 1679:
case 2790:
case 205:
case 1599:
case 1551:
case 2779:
case 3224:
case 1883:
case 2982:
case 3737:
case 3829:
case 2794:
case 2778:
case 2196:
case 2781:
case 2267:
case 539:
case 3781:
case 3267:
case 763:
case 1484:
case 3196:
case 1247:
case 174:
case 2737:
case 2829:
case 1245:
case 3794:
case 1459:
case 2832:
case 223:
case 1933:
case 508:
case 1491:
case 2828:
case 3982:
case 237:
case 1635:
case 2392:
case 1036:
case 1216:
case 445:
case 74:
case 724:
case 811:
case 291:
case 2369:
case 2542:
case 980:
case 2529:
case 1811:
case 2532:
case 3667:
case 3107:
case 2528:
case 3665:
case 2114:
case 3105:
case 1917:
case 263:
case 1616:
case 3154:
case 791:
case 611:
case 662:
case 3171:
case 1126:
case 2620:
case 224:
case 931:
case 1943:
case 2745:
case 997:
case 1476:
case 1237:
case 822:
case 1613:
case 173:
case 764:
case 3756:
case 2914:
case 1023:
case 3905:
case 3088:
case 3760:
case 3950:
case 1117:
case 2362:
case 1627:
case 863:
case 1115:
case 2230:
case 3054:
case 601:
case 623:
case 2374:
case 2010:
case 2351:
case 3907:
case 2370:
case 222:
case 84:
case 3166:
case 3005:
case 2640:
case 2727:
case 2839:
case 3606:
case 664:
case 3311:
case 379:
case 637:
case 2234:
case 148:
case 3295:
case 3954:
case 3603:
case 691:
case 3971:
case 1461:
case 1744:
case 762:
case 3875:
case 942:
case 1926:
case 3764:
case 3441:
case 4041:
case 978:
case 1227:
case 3431:
case 823:
case 801:
case 3993:
case 1734:
case 663:
case 2487:
case 2244:
case 2630:
case 2849:
case 1225:
case 2386:
case 3697:
case 2634:
case 3575:
case 3093:
case 262:
case 2408:
case 891:
case 837:
case 3203:
case 722:
case 64:
case 3577:
case 190:
case 2203:
case 1332:
case 2096:
case 805:
case 779:
case 1328:
case 3539:
case 3383:
case 362:
case 3408:
case 4008:
case 3240:
case 2697:
case 2996:
case 1868:
case 3630:
case 100:
case 3849:
case 3848:
case 552:
case 3244:
case 876:
case 4087:
case 2501:
case 187:
case 1272:
case 2182:
case 1892:
case 129:
case 2431:
case 3725:
case 2441:
case 3910:
case 2295:
case 2875:
case 3838:
case 2772:
case 2311:
case 2050:
case 1660:
case 2877:
case 2988:
case 2005:
case 2166:
case 3839:
case 3727:
case 2606:
case 3374:
case 1703:
case 3010:
case 3351:
case 2907:
case 1592:
case 1104:
case 1412:
case 3230:
case 1664:
case 2054:
case 2089:
case 3549:
case 3362:
case 582:
case 695:
case 2801:
case 3914:
case 2905:
case 41:
case 2760:
case 2088:
case 2853:
case 634:
case 89:
case 1176:
case 3488:
case 1423:
case 3121:
case 2670:
case 1867:
case 1762:
case 914:
case 2340:
case 3471:
case 1173:
case 827:
case 1426:
case 1961:
case 198:
case 2856:
case 1799:
case 889:
case 2283:
case 641:
case 3845:
case 2410:
case 1751:
case 732:
case 80:
case 2102:
case 2414:
case 4005:
case 2662:
case 1327:
case 1052:
case 479:
case 4050:
case 3450:
case 2594:
case 108:
case 2674:
case 3535:
case 902:
case 2651:
case 1061:
case 3407:
case 256:
case 3041:
case 2909:
case 2556:
case 3545:
case 627:
case 2908:
case 2085:
case 3547:
case 3395:
case 2087:
case 1567:
case 573:
case 2683:
case 1786:
case 1159:
case 3835:
case 3931:
case 3513:
case 4093:
case 2881:
case 2985:
case 2008:
case 1158:
case 2879:
case 2987:
case 3728:
case 1783:
case 2330:
case 633:
case 3837:
case 3732:
case 1184:
case 2878:
case 2251:
case 1520:
case 3298:
case 2837:
case 2732:
case 845:
case 3878:
case 2516:
case 3879:
case 3987:
case 3330:
case 2493:
case 3881:
case 3008:
case 3262:
case 2835:
case 2931:
case 3009:
case 1242:
case 140:
case 1629:
case 3087:
case 1119:
case 2397:
case 3686:
case 2545:
case 153:
case 526:
case 3085:
case 1524:
case 3890:
case 2031:
case 3556:
case 3581:
case 356:
case 1364:
case 3699:
case 2041:
case 3674:
case 2535:
case 3344:
case 3651:
case 2813:
case 970:
case 2537:
case 1372:
case 1820:
case 3594:
case 2405:
case 2816:
case 4014:
case 3579:
case 3414:
case 3662:
case 1229:
case 2845:
case 3410:
case 183:
case 1232:
case 1824:
case 2489:
case 3670:
case 2306:
case 2742:
case 1360:
case 31:
case 2365:
case 152:
case 3324:
case 1356:
case 958:
case 3902:
case 30:
case 965:
case 2021:
case 1534:
case 500:
case 333:
case 3860:
case 587:
case 1622:
case 2367:
case 1404:
case 1639:
case 1840:
case 529:
case 1844:
case 2825:
case 2921:
case 39:
case 1530:
case 2739:
case 2463:
case 3777:
case 389:
case 2748:
case 3185:
case 3560:
case 1540:
case 2749:
case 1222:
case 988:
case 1390:
case 1238:
case 464:
case 1379:
case 341:
case 2527:
case 1830:
case 3108:
case 3109:
case 3572:
case 3669:
case 1918:
case 3692:
case 1544:
case 334:
case 1381:
case 136:
case 2525:
case 476:
case 495:
case 61:
case 1337:
case 1980:
case 2669:
case 548:
case 789:
case 1058:
case 727:
case 3527:
case 177:
case 1897:
case 1503:
case 1436:
case 345:
case 70:
case 405:
case 1984:
case 1959:
case 1080:
case 3131:
case 1433:
case 3482:
case 2185:
case 4082:
case 1895:
case 886:
case 1973:
case 3738:
case 3463:
case 1161:
case 2320:
case 741:
case 2777:
case 2292:
case 118:
case 1601:
case 1443:
case 632:
case 734:
case 1152:
case 81:
case 3825:
case 2002:
case 2269:
case 994:
case 3367:
case 686:
case 1073:
case 1806:
case 856:
case 2860:
case 2124:
case 2040:
case 3165:
case 3293:
case 3580:
case 2614:
case 3605:
case 213:
case 604:
case 3296:
case 1147:
case 986:
case 2519:
case 3876:
case 1925:
case 2474:
case 2499:
case 2726:
case 3607:
case 3559:
case 647:
case 1623:
case 3688:
case 821:
case 4011:
case 1027:
case 3591:
case 1352:
case 3689:
case 1714:
case 83:
case 3654:
case 3341:
case 3903:
case 612:
case 932:
case 1361:
case 3584:
case 2034:
case 2385:
case 3250:
case 3576:
case 2819:
case 3097:
case 202:
case 3693:
case 370:
case 3207:
case 3880:
case 2387:
case 3095:
case 2930:
case 3288:
case 2309:
case 1223:
case 63:
case 3859:
case 603:
case 2210:
case 894:
case 3254:
case 2030:
case 2483:
case 3891:
case 621:
case 3858:
case 847:
case 1226:
case 2254:
case 2995:
case 160:
case 3483:
case 4083:
case 2858:
case 116:
case 314:
case 1429:
case 2288:
case 3309:
case 1178:
case 4086:
case 2884:
case 1194:
case 2289:
case 1793:
case 2696:
case 688:
case 2095:
case 2573:
case 2207:
case 2880:
case 2331:
case 302:
case 442:
case 3214:
case 2250:
case 3819:
case 15:
case 2097:
case 3044:
case 3120:
case 2584:
case 478:
case 120:
case 2341:
case 1707:
case 2689:
case 1960:
case 3470:
case 2558:
case 4070:
case 546:
case 109:
case 2688:
case 2411:
case 3940:
case 2906:
case 2167:
case 3518:
case 3944:
case 2607:
case 3726:
case 1312:
case 4051:
case 825:
case 3451:
case 1964:
case 3519:
case 2003:
case 3723:
case 1060:
case 658:
case 1442:
case 313:
case 2006:
case 4062:
case 2293:
case 1156:
case 199:
case 2605:
case 1585:
case 530:
case 33:
case 3717:
case 2666:
case 3140:
case 2065:
case 1655:
case 450:
case 3920:
case 1657:
case 1587:
case 2103:
case 2663:
case 1053:
case 758:
case 393:
case 670:
case 3924:
case 2861:
case 1509:
case 3746:
case 2282:
case 1956:
case 119:
case 46:
case 2967:
case 3020:
case 1438:
case 2852:
case 1604:
case 3743:
case 1164:
case 2757:
case 1449:
case 312:
case 3733:
case 4068:
case 1255:
case 3469:
case 1979:
case 3134:
case 1782:
case 1448:
case 2195:
case 1885:
case 3736:
case 1981:
case 1319:
case 407:
case 347:
case 1318:
case 1090:
case 175:
case 1078:
case 42:
case 725:
case 2552:
case 106:
case 265:
case 788:
case 497:
case 3130:
case 870:
case 1809:
case 258:
case 1990:
case 613:
case 793:
case 358:
case 1035:
case 90:
case 365:
case 933:
case 3552:
case 1391:
case 1217:
case 1633:
case 3682:
case 1935:
case 294:
case 2512:
case 1243:
case 2492:
case 99:
case 3263:
case 2469:
case 2134:
case 1937:
case 212:
case 892:
case 989:
case 2743:
case 3757:
case 3967:
case 2020:
case 3861:
case 2924:
case 2746:
case 3965:
case 388:
case 2302:
case 293:
case 3755:
case 1916:
case 3103:
case 692:
case 712:
case 1373:
case 3704:
case 959:
case 1643:
case 747:
case 1531:
case 934:
case 2024:
case 1913:
case 2140:
case 2812:
case 221:
case 203:
case 1646:
case 3321:
case 1045:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757131201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,];
var gg_b = "1757131201/";

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
