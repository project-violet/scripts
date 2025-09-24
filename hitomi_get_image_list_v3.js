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
case 4006:
case 2857:
case 2357:
case 537:
case 1659:
case 1068:
case 3731:
case 2524:
case 2249:
case 1491:
case 869:
case 3689:
case 2450:
case 3748:
case 3870:
case 2039:
case 2276:
case 454:
case 1242:
case 3534:
case 3238:
case 3690:
case 3262:
case 2681:
case 4083:
case 4042:
case 2745:
case 1768:
case 3492:
case 261:
case 3127:
case 153:
case 2016:
case 3048:
case 918:
case 4061:
case 2927:
case 2739:
case 569:
case 2021:
case 2663:
case 2556:
case 1995:
case 2686:
case 1590:
case 709:
case 466:
case 4066:
case 1201:
case 2026:
case 208:
case 3246:
case 2551:
case 2778:
case 2917:
case 3736:
case 1496:
case 3775:
case 1266:
case 710:
case 3019:
case 2603:
case 2514:
case 2582:
case 1893:
case 1393:
case 2711:
case 2078:
case 1589:
case 1198:
case 1434:
case 3104:
case 2806:
case 3794:
case 1155:
case 2904:
case 109:
case 1123:
case 3200:
case 520:
case 624:
case 1696:
case 1577:
case 62:
case 2599:
case 2188:
case 1876:
case 1376:
case 673:
case 2883:
case 2383:
case 3287:
case 3988:
case 110:
case 343:
case 1592:
case 1849:
case 1349:
case 2361:
case 2507:
case 242:
case 446:
case 526:
case 314:
case 3397:
case 921:
case 294:
case 1371:
case 977:
case 549:
case 3164:
case 2866:
case 3490:
case 3309:
case 241:
case 1240:
case 3489:
case 2650:
case 3872:
case 1818:
case 2567:
case 440:
case 1144:
case 907:
case 31:
case 826:
case 1459:
case 29:
case 849:
case 116:
case 3054:
case 2215:
case 1209:
case 790:
case 1360:
case 2559:
case 4072:
case 3543:
case 175:
case 3603:
case 3582:
case 58:
case 3726:
case 3711:
case 1012:
case 1084:
case 648:
case 680:
case 534:
case 83:
case 1705:
case 105:
case 1563:
case 3218:
case 457:
case 2246:
case 3026:
case 2117:
case 3551:
case 1784:
case 3778:
case 3917:
case 263:
case 2238:
case 2262:
case 2690:
case 3137:
case 152:
case 3745:
case 2031:
case 361:
case 2492:
case 2937:
case 2729:
case 2127:
case 796:
case 1065:
case 1651:
case 3927:
case 3739:
case 1722:
case 998:
case 3021:
case 1682:
case 1614:
case 3857:
case 3357:
case 2477:
case 2253:
case 3524:
case 2029:
case 1480:
case 3235:
case 3450:
case 2370:
case 2870:
case 2748:
case 3276:
case 1765:
case 3721:
case 2534:
case 752:
case 2489:
case 1913:
case 3801:
case 3301:
case 3452:
case 1346:
case 1846:
case 1443:
case 1414:
case 1879:
case 39:
case 1680:
case 3293:
case 1720:
case 2897:
case 214:
case 1451:
case 1802:
case 1699:
case 3481:
case 671:
case 1607:
case 1547:
case 2809:
case 1815:
case 2309:
case 627:
case 2260:
case 904:
case 3188:
case 1174:
case 3883:
case 3383:
case 1710:
case 2094:
case 190:
case 3842:
case 2287:
case 3342:
case 775:
case 2988:
case 243:
case 1270:
case 672:
case 97:
case 3361:
case 3861:
case 1825:
case 1353:
case 1955:
case 3806:
case 1841:
case 1667:
case 3904:
case 2369:
case 2869:
case 668:
case 2200:
case 558:
case 2591:
case 2185:
case 602:
case 90:
case 1862:
case 392:
case 3986:
case 955:
case 1173:
case 416:
case 3312:
case 506:
case 2186:
case 1878:
case 1740:
case 3060:
case 293:
case 1854:
case 1527:
case 3305:
case 1826:
case 3485:
case 2103:
case 576:
case 760:
case 1311:
case 1811:
case 2793:
case 3760:
case 1134:
case 1230:
case 335:
case 385:
case 806:
case 1455:
case 34:
case 1316:
case 1816:
case 3787:
case 1159:
case 3365:
case 1982:
case 1757:
case 3189:
case 410:
case 2989:
case 479:
case 604:
case 2637:
case 3700:
case 3294:
case 3822:
case 3981:
case 2990:
case 1845:
case 3627:
case 344:
case 519:
case 2163:
case 2868:
case 674:
case 409:
case 1517:
case 570:
case 2832:
case 2332:
case 1999:
case 3427:
case 350:
case 1766:
case 895:
case 3275:
case 2574:
case 3715:
case 2558:
case 3320:
case 3820:
case 1208:
case 1907:
case 3192:
case 2226:
case 3555:
case 1066:
case 3779:
case 2254:
case 3015:
case 4008:
case 3177:
case 36:
case 2533:
case 2278:
case 882:
case 1585:
case 2977:
case 1191:
case 3746:
case 930:
case 3002:
case 3229:
case 3604:
case 3513:
case 3544:
case 3025:
case 2245:
case 1967:
case 1498:
case 3053:
case 1655:
case 1061:
case 3762:
case 1623:
case 1083:
case 356:
case 2239:
case 2035:
case 740:
case 881:
case 788:
case 2688:
case 3753:
case 160:
case 581:
case 3062:
case 1742:
case 1783:
case 3310:
case 3810:
case 3947:
case 2028:
case 3248:
case 9:
case 2147:
case 4068:
case 4032:
case 2735:
case 2700:
case 291:
case 3181:
case 2087:
case 3990:
case 2963:
case 599:
case 244:
case 903:
case 1329:
case 3163:
case 3868:
case 1151:
case 3332:
case 1348:
case 899:
case 2000:
case 1182:
case 1114:
case 1959:
case 1143:
case 2787:
case 1210:
case 2865:
case 2952:
case 2189:
case 3989:
case 3152:
case 1124:
case 2903:
case 3103:
case 3793:
case 677:
case 2404:
case 347:
case 621:
case 285:
case 1375:
case 1875:
case 1973:
case 2986:
case 3093:
case 2060:
case 393:
case 2617:
case 4020:
case 1156:
case 1319:
case 2305:
case 1819:
case 2231:
case 4022:
case 2725:
case 2038:
case 2062:
case 3221:
case 2041:
case 2310:
case 1265:
case 2248:
case 3028:
case 389:
case 1069:
case 3735:
case 1167:
case 3049:
case 3245:
case 2053:
case 2762:
case 1894:
case 3239:
case 2685:
case 1996:
case 3728:
case 3035:
case 1769:
case 3150:
case 2555:
case 1205:
case 2219:
case 2950:
case 883:
case 2779:
case 1009:
case 1212:
case 26:
case 3278:
case 1097:
case 1284:
case 3977:
case 1180:
case 2746:
case 3718:
case 2002:
case 515:
case 1772:
case 250:
case 1199:
case 4012:
case 1709:
case 815:
case 4084:
case 3437:
case 3992:
case 2664:
case 2320:
case 2820:
case 3211:
case 2192:
case 3226:
case 1072:
case 3771:
case 583:
case 238:
case 1793:
case 2811:
case 1308:
case 2040:
case 2924:
case 1103:
case 3336:
case 2134:
case 522:
case 3934:
case 3875:
case 2423:
case 2698:
case 147:
case 2230:
case 739:
case 789:
case 2878:
case 49:
case 767:
case 3695:
case 2354:
case 2854:
case 193:
case 699:
case 3819:
case 3319:
case 2527:
case 240:
case 1181:
case 1637:
case 2339:
case 877:
case 1990:
case 2345:
case 2057:
case 1868:
case 1368:
case 417:
case 3143:
case 2316:
case 3114:
case 229:
case 3770:
case 2982:
case 807:
case 2943:
case 2159:
case 2821:
case 577:
case 1989:
case 728:
case 2413:
case 2066:
case 1150:
case 4026:
case 4011:
case 3009:
case 2613:
case 1533:
case 3991:
case 2980:
case 462:
case 2701:
case 1977:
case 2585:
case 478:
case 1830:
case 1330:
case 2999:
case 4078:
case 3199:
case 3588:
case 1574:
case 2208:
case 818:
case 3107:
case 1558:
case 1437:
case 1018:
case 2001:
case 937:
case 1749:
case 3265:
case 1776:
case 683:
case 633:
case 2742:
case 1221:
case 3658:
case 139:
case 189:
case 3495:
case 2564:
case 4016:
case 2232:
case 2268:
case 2498:
case 2967:
case 4021:
case 167:
case 1076:
case 2706:
case 3894:
case 615:
case 2196:
case 3769:
case 1035:
case 3633:
case 25:
case 461:
case 3316:
case 3816:
case 2182:
case 329:
case 750:
case 1000:
case 676:
case 346:
case 3821:
case 3321:
case 1189:
case 1598:
case 3757:
case 2831:
case 3444:
case 3413:
case 1190:
case 1464:
case 3339:
case 1981:
case 1822:
case 1322:
case 1087:
case 1294:
case 965:
case 3951:
case 3845:
case 3345:
case 3057:
case 192:
case 1986:
case 2973:
case 50:
case 3378:
case 3878:
case 1384:
case 2695:
case 3173:
case 2474:
case 619:
case 3354:
case 670:
case 574:
case 87:
case 2819:
case 1805:
case 1305:
case 958:
case 3527:
case 340:
case 1485:
case 523:
case 338:
case 2124:
case 3811:
case 3040:
case 2433:
case 2836:
case 600:
case 2934:
case 3455:
case 3230:
case 1544:
case 1513:
case 1604:
case 3232:
case 4048:
case 792:
case 1229:
case 3061:
case 1762:
case 3655:
case 1685:
case 3706:
case 934:
case 2394:
case 1741:
case 2222:
case 3083:
case 2633:
case 695:
case 2674:
case 682:
case 632:
case 1231:
case 1417:
case 3761:
case 1062:
case 1725:
case 354:
case 3783:
case 1310:
case 785:
case 735:
case 2495:
case 1248:
case 4029:
case 3766:
case 225:
case 3999:
case 631:
case 1079:
case 1715:
case 2199:
case 3208:
case 1320:
case 1702:
case 3001:
case 4019:
case 1192:
case 791:
case 2205:
case 1219:
case 1523:
case 2009:
case 1779:
case 463:
case 3613:
case 3504:
case 3644:
case 2097:
case 2212:
case 4036:
case 744:
case 2772:
case 1002:
case 3191:
case 995:
case 1137:
case 352:
case 161:
case 634:
case 684:
case 2768:
case 580:
case 3800:
case 1663:
case 1021:
case 467:
case 1739:
case 2206:
case 3651:
case 1357:
case 1045:
case 3503:
case 3480:
case 794:
case 4028:
case 2032:
case 439:
case 2659:
case 1450:
case 548:
case 3022:
case 1721:
case 3887:
case 2283:
case 1276:
case 880:
case 830:
case 982:
case 932:
case 68:
case 2496:
case 645:
case 3360:
case 3624:
case 3209:
case 1054:
case 1514:
case 1603:
case 1543:
case 4018:
case 3005:
case 1726:
case 3467:
case 3998:
case 2198:
case 742:
case 3084:
case 536:
case 586:
case 1078:
case 2708:
case 2393:
case 351:
case 305:
case 3195:
case 3581:
case 2673:
case 4071:
case 836:
case 886:
case 717:
case 1218:
case 3272:
case 3656:
case 1011:
case 1778:
case 1840:
case 855:
case 1383:
case 3710:
case 2876:
case 2376:
case 210:
case 801:
case 279:
case 2835:
case 2335:
case 2349:
case 2849:
case 778:
case 3353:
case 3325:
case 3825:
case 1507:
case 3158:
case 1861:
case 1647:
case 3010:
case 3667:
case 1306:
case 1806:
case 2434:
case 2828:
case 209:
case 871:
case 2155:
case 2696:
case 555:
case 3424:
case 2933:
case 1403:
case 906:
case 1985:
case 3338:
case 2577:
case 3913:
case 493:
case 1650:
case 658:
case 1567:
case 1452:
case 2818:
case 1801:
case 396:
case 3414:
case 3443:
case 502:
case 412:
case 19:
case 3379:
case 2459:
case 4093:
case 1293:
case 1463:
case 447:
case 802:
case 2371:
case 2871:
case 3802:
case 194:
case 3451:
case 2730:
case 3547:
case 1481:
case 1866:
case 141:
case 3815:
case 1964:
case 797:
case 251:
case 2195:
case 2581:
case 3590:
case 3673:
case 1075:
case 2705:
case 1117:
case 669:
case 2272:
case 2563:
case 2656:
case 2712:
case 3008:
case 4015:
case 1559:
case 3496:
case 2860:
case 637:
case 687:
case 1736:
case 275:
case 4046:
case 743:
case 1019:
case 1775:
case 2552:
case 464:
case 1202:
case 3198:
case 2084:
case 2297:
case 3393:
case 3893:
case 2012:
case 3708:
case 1477:
case 2643:
case 2614:
case 2682:
case 3491:
case 2480:
case 983:
case 3032:
case 3068:
case 1870:
case 1748:
case 3242:
case 4038:
case 2407:
case 1262:
case 456:
case 1729:
case 915:
case 3768:
case 1048:
case 1127:
case 2269:
case 2499:
case 4025:
case 3206:
case 1397:
case 435:
case 485:
case 2699:
case 3371:
case 573:
case 2302:
case 2451:
case 3730:
case 2607:
case 1490:
case 1692:
case 2315:
case 1309:
case 803:
case 1489:
case 999:
case 413:
case 2846:
case 3144:
case 3318:
case 3818:
case 503:
case 1872:
case 2443:
case 82:
case 620:
case 2879:
case 2379:
case 873:
case 1596:
case 197:
case 2841:
case 2667:
case 444:
case 3434:
case 2923:
case 3328:
case 3828:
case 3123:
case 1869:
case 491:
case 3696:
case 1591:
case 2133:
case 4087:
case 2362:
case 2862:
case 3577:
case 1094:
case 2710:
case 3376:
case 3876:
case 2270:
case 626:
case 379:
case 3335:
case 1988:
case 3349:
case 3592:
case 44:
case 2353:
case 2853:
case 3473:
case 2825:
case 3257:
case 2158:
case 656:
case 770:
case 2936:
case 719:
case 4091:
case 961:
case 2834:
case 2975:
case 1587:
case 3136:
case 195:
case 3438:
case 3557:
case 3462:
case 1108:
case 398:
case 3324:
case 3017:
case 700:
case 1640:
case 3954:
case 2250:
case 2154:
case 1905:
case 2476:
case 1483:
case 866:
case 1461:
case 2373:
case 3453:
case 1912:
case 2449:
case 3717:
case 1168:
case 3402:
case 3351:
case 3129:
case 1863:
case 2737:
case 3540:
case 2929:
case 3600:
case 554:
case 85:
case 2139:
case 3415:
case 664:
case 1296:
case 1381:
case 3727:
case 1352:
case 2418:
case 3687:
case 2037:
case 2359:
case 2859:
case 3916:
case 3479:
case 3027:
case 3343:
case 2116:
case 3148:
case 3921:
case 908:
case 3679:
case 1744:
case 2891:
case 3880:
case 3380:
case 304:
case 1562:
case 1538:
case 942:
case 64:
case 731:
case 1601:
case 840:
case 176:
case 3646:
case 3064:
case 538:
case 540:
case 644:
case 1013:
case 1044:
case 1666:
case 838:
case 888:
case 3561:
case 3542:
case 3602:
case 2671:
case 3399:
case 3764:
case 1130:
case 3400:
case 119:
case 1023:
case 3625:
case 795:
case 2788:
case 1259:
case 3004:
case 1515:
case 2509:
case 2649:
case 829:
case 1440:
case 99:
case 2597:
case 2676:
case 2252:
case 420:
case 1502:
case 1642:
case 1755:
case 2281:
case 994:
case 2088:
case 3460:
case 2396:
case 2896:
case 782:
case 3785:
case 3367:
case 3867:
case 529:
case 2572:
case 1389:
case 3037:
case 1670:
case 1593:
case 3859:
case 3359:
case 2916:
case 3121:
case 3948:
case 2882:
case 2314:
case 2148:
case 4067:
case 2921:
case 2851:
case 2351:
case 3471:
case 1267:
case 2129:
case 445:
case 2945:
case 1497:
case 628:
case 3145:
case 2540:
case 2600:
case 3929:
case 2415:
case 1122:
case 1390:
case 1890:
case 2119:
case 1105:
case 1795:
case 2856:
case 3154:
case 639:
case 1112:
case 1184:
case 3178:
case 3373:
case 3873:
case 2277:
case 43:
case 1280:
case 3428:
case 3334:
case 3975:
case 2136:
case 434:
case 2441:
case 799:
case 1299:
case 3111:
case 2557:
case 2462:
case 298:
case 1207:
case 1908:
case 2324:
case 667:
case 3126:
case 2292:
case 2660:
case 557:
case 2638:
case 783:
case 733:
case 2662:
case 3994:
case 377:
case 2704:
case 1074:
case 2460:
case 1669:
case 3493:
case 3628:
case 1251:
case 4082:
case 2785:
case 4043:
case 4014:
case 2641:
case 2367:
case 3263:
case 3572:
case 1282:
case 458:
case 1243:
case 2625:
case 199:
case 2289:
case 1758:
case 612:
case 2085:
case 3252:
case 1571:
case 1549:
case 1609:
case 4056:
case 3203:
case 997:
case 2561:
case 2542:
case 2602:
case 2583:
case 1576:
case 2399:
case 1930:
case 1697:
case 611:
case 1535:
case 2400:
case 3891:
case 2880:
case 3391:
case 322:
case 204:
case 1377:
case 2646:
case 2487:
case 1528:
case 4024:
case 3569:
case 223:
case 1470:
case 2900:
case 3629:
case 271:
case 3204:
case 2781:
case 400:
case 579:
case 2639:
case 614:
case 2052:
case 2512:
case 1970:
case 1536:
case 3631:
case 912:
case 61:
case 810:
case 2288:
case 120:
case 2987:
case 1575:
case 2752:
case 3648:
case 1157:
case 3508:
case 993:
case 3789:
case 1073:
case 2398:
case 2898:
case 303:
case 2960:
case 3264:
case 1608:
case 1548:
case 268:
case 2626:
case 3494:
case 1734:
case 1773:
case 1140:
case 3619:
case 2654:
case 1529:
case 3895:
case 816:
case 737:
case 32:
case 126:
case 643:
case 1034:
case 3125:
case 2520:
case 3949:
case 1161:
case 3858:
case 2478:
case 553:
case 2149:
case 663:
case 2925:
case 230:
case 2135:
case 1142:
case 2454:
case 3374:
case 3874:
case 2237:
case 481:
case 3833:
case 3333:
case 1408:
case 248:
case 2426:
case 3694:
case 2962:
case 2941:
case 928:
case 2855:
case 2355:
case 2047:
case 3227:
case 3141:
case 853:
case 726:
case 1969:
case 1106:
case 236:
case 3179:
case 482:
case 2416:
case 2344:
case 2844:
case 1791:
case 3146:
case 2:
case 2313:
case 2813:
case 3217:
case 1101:
case 989:
case 3777:
case 3918:
case 2050:
case 359:
case 720:
case 1166:
case 1909:
case 2915:
case 3429:
case 1091:
case 3792:
case 1997:
case 1468:
case 495:
case 3971:
case 2902:
case 372:
case 1024:
case 2568:
case 3654:
case 1410:
case 3522:
case 1756:
case 165:
case 3898:
case 3398:
case 3193:
case 2675:
case 302:
case 203:
case 2264:
case 3611:
case 2160:
case 3565:
case 944:
case 301:
case 4033:
case 1274:
case 1170:
case 1743:
case 355:
case 2090:
case 1782:
case 69:
case 3621:
case 3063:
case 1665:
case 1526:
case 1258:
case 2789:
case 3616:
case 2629:
case 3900:
case 4058:
case 2204:
case 3505:
case 78:
case 3645:
case 641:
case 327:
case 2100:
case 3781:
case 1827:
case 985:
case 3763:
case 1751:
case 1578:
case 3584:
case 1233:
case 3512:
case 4074:
case 590:
case 1422:
case 1109:
case 2115:
case 1966:
case 875:
case 3050:
case 259:
case 1864:
case 1620:
case 2429:
case 2792:
case 415:
case 1080:
case 758:
case 4095:
case 3171:
case 1707:
case 184:
case 3902:
case 386:
case 1465:
case 851:
case 2448:
case 13:
case 18:
case 3344:
case 2092:
case 2146:
case 3:
case 575:
case 2431:
case 3118:
case 3946:
case 2918:
case 1901:
case 2833:
case 3426:
case 348:
case 2694:
case 950:
case 964:
case 1885:
case 3128:
case 3855:
case 1169:
case 3823:
case 2928:
case 1304:
case 1804:
case 2125:
case 1412:
case 2358:
case 3478:
case 765:
case 380:
case 330:
case 2976:
case 96:
case 2935:
case 2374:
case 1288:
case 3274:
case 2970:
case 696:
case 1081:
case 3782:
case 155:
case 3714:
case 3170:
case 2575:
case 1987:
case 3526:
case 3665:
case 1752:
case 3957:
case 842:
case 407:
case 1621:
case 1616:
case 2632:
case 3554:
case 2223:
case 2255:
case 3327:
case 3827:
case 3082:
case 988:
case 1645:
case 1505:
case 2519:
case 2430:
case 7:
case 3622:
case 1512:
case 2337:
case 3578:
case 3545:
case 2140:
case 2773:
case 946:
case 1003:
case 3940:
case 748:
case 3317:
case 3817:
case 2244:
case 3024:
case 2213:
case 3684:
case 3612:
case 226:
case 1086:
case 102:
case 1898:
case 365:
case 1611:
case 730:
case 1960:
case 3516:
case 3521:
case 3056:
case 3885:
case 1938:
case 1426:
case 1047:
case 1855:
case 1355:
case 345:
case 3804:
case 3304:
case 3484:
case 1478:
case 269:
case 2161:
case 3961:
case 1925:
case 3067:
case 1149:
case 1953:
case 1747:
case 561:
case 3983:
case 3942:
case 1176:
case 2388:
case 2142:
case 605:
case 3966:
case 1510:
case 3364:
case 1050:
case 2432:
case 562:
case 2091:
case 95:
case 652:
case 1902:
case 3197:
case 3707:
case 1445:
case 3465:
case 1421:
case 1416:
case 727:
case 33:
case 1750:
case 2101:
case 1313:
case 1:
case 3901:
case 1675:
case 265:
case 1636:
case 40:
case 3531:
case 2724:
case 814:
case 51:
case 3548:
case 3608:
case 2516:
case 2056:
case 609:
case 1494:
case 2605:
case 1619:
case 2545:
case 3140:
case 47:
case 4064:
case 1568:
case 2317:
case 2817:
case 2024:
case 3244:
case 1532:
case 2684:
case 12:
case 2612:
case 1395:
case 173:
case 404:
case 3034:
case 326:
case 2410:
case 1204:
case 3059:
case 1629:
case 2014:
case 897:
case 2082:
case 2827:
case 2327:
case 3519:
case 2751:
case 1285:
case 543:
case 2622:
case 1089:
case 2420:
case 3837:
case 3337:
case 2578:
case 2274:
case 843:
case 1631:
case 1187:
case 1090:
case 4085:
case 2743:
case 320:
case 2526:
case 2957:
case 3157:
case 1508:
case 2511:
case 2099:
case 28:
case 23:
case 2295:
case 1448:
case 863:
case 1217:
case 1092:
case 1918:
case 2007:
case 1777:
case 563:
case 2422:
case 2364:
case 3432:
case 3997:
case 1792:
case 1077:
case 3298:
case 2707:
case 2484:
case 3161:
case 2412:
case 1949:
case 724:
case 1125:
case 957:
case 4027:
case 2983:
case 2942:
case 1374:
case 1162:
case 1138:
case 1833:
case 1694:
case 2767:
case 925:
case 773:
case 2169:
case 1227:
case 245:
case 3106:
case 1141:
case 383:
case 1250:
case 4:
case 3105:
case 528:
case 1435:
case 2500:
case 2442:
case 2483:
case 2905:
case 1154:
case 486:
case 436:
case 1373:
case 1873:
case 232:
case 282:
case 2886:
case 3184:
case 3280:
case 2912:
case 2984:
case 1428:
case 707:
case 3469:
case 3299:
case 2406:
case 2587:
case 1334:
case 3207:
case 2803:
case 2108:
case 1111:
case 4050:
case 118:
case 1126:
case 3908:
case 1418:
case 2852:
case 1037:
case 3889:
case 3389:
case 1931:
case 1948:
case 1121:
case 3165:
case 1859:
case 1359:
case 2657:
case 2965:
case 2863:
case 539:
case 867:
case 1929:
case 1737:
case 722:
case 1145:
case 3932:
case 3122:
case 3409:
case 1139:
case 448:
case 2381:
case 2881:
case 3390:
case 2466:
case 3224:
case 3392:
case 2013:
case 2920:
case 468:
case 1203:
case 2525:
case 3120:
case 3930:
case 206:
case 3576:
case 1671:
case 402:
case 2130:
case 1891:
case 910:
case 1391:
case 812:
case 979:
case 3377:
case 2273:
case 2562:
case 2541:
case 1618:
case 2601:
case 3256:
case 2850:
case 2350:
case 3528:
case 1994:
case 200:
case 1281:
case 2755:
case 1896:
case 2579:
case 1628:
case 3669:
case 1572:
case 427:
case 2606:
case 2546:
case 3251:
case 4063:
case 2910:
case 3214:
case 2023:
case 2847:
case 2661:
case 2347:
case 3110:
case 2515:
case 3033:
case 401:
case 1635:
case 2440:
case 4081:
case 455:
case 3863:
case 975:
case 3132:
case 1851:
case 1351:
case 1402:
case 1600:
case 704:
case 2497:
case 2932:
case 3296:
case 2122:
case 331:
case 2409:
case 3922:
case 1939:
case 2390:
case 3381:
case 3881:
case 3466:
case 1687:
case 905:
case 1446:
case 1131:
case 2670:
case 666:
case 774:
case 556:
case 3560:
case 1916:
case 1921:
case 3657:
case 1148:
case 1843:
case 1343:
case 1882:
case 1382:
case 2095:
case 2299:
case 952:
case 3406:
case 3803:
case 1462:
case 3108:
case 1660:
case 1292:
case 1824:
case 1324:
case 2908:
case 283:
case 4092:
case 2795:
case 3905:
case 3098:
case 1277:
case 1425:
case 382:
case 332:
case 2184:
case 2112:
case 3461:
case 564:
case 86:
case 550:
case 2280:
case 3291:
case 1717:
case 660:
case 370:
case 3910:
case 2243:
case 3023:
case 319:
case 3847:
case 3347:
case 3661:
case 544:
case 2758:
case 1289:
case 3440:
case 3642:
case 996:
case 3502:
case 4090:
case 300:
case 1290:
case 3755:
case 3723:
case 3579:
case 2074:
case 4089:
case 2733:
case 2669:
case 844:
case 54:
case 1867:
case 1785:
case 1880:
case 3744:
case 585:
case 1679:
case 3538:
case 2877:
case 104:
case 376:
case 1646:
case 3601:
case 2256:
case 813:
case 646:
case 2470:
case 3350:
case 3850:
case 17:
case 2224:
case 2892:
case 513:
case 2609:
case 1615:
case 1561:
case 1807:
case 174:
case 3666:
case 3553:
case 306:
case 2576:
case 1583:
case 424:
case 835:
case 1542:
case 2535:
case 2697:
case 1764:
case 10:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758711602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,];
var gg_b = "1758711602/";

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
