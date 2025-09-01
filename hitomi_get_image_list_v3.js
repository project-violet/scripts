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
case 1898:
case 1668:
case 2987:
case 885:
case 1093:
case 3078:
case 1695:
case 1348:
case 275:
case 4037:
case 2258:
case 3922:
case 3538:
case 3118:
case 1817:
case 1371:
case 875:
case 2855:
case 1765:
case 1506:
case 1230:
case 638:
case 831:
case 2658:
case 2046:
case 709:
case 2940:
case 1059:
case 733:
case 3474:
case 3831:
case 2470:
case 3628:
case 3439:
case 2963:
case 2952:
case 2736:
case 3174:
case 1382:
case 2332:
case 3543:
case 3519:
case 3911:
case 2383:
case 1333:
case 3725:
case 3186:
case 1774:
case 1943:
case 1232:
case 3553:
case 1919:
case 523:
case 1511:
case 1131:
case 464:
case 857:
case 4043:
case 1125:
case 2233:
case 203:
case 3305:
case 3599:
case 2035:
case 3486:
case 330:
case 2889:
case 1839:
case 2682:
case 1632:
case 1425:
case 3920:
case 2996:
case 794:
case 1431:
case 1049:
case 2950:
case 1267:
case 3000:
case 3379:
case 1380:
case 963:
case 3417:
case 21:
case 1173:
case 2012:
case 3334:
case 284:
case 2648:
case 3276:
case 440:
case 2657:
case 2395:
case 747:
case 2509:
case 161:
case 1797:
case 2845:
case 239:
case 2901:
case 3537:
case 3465:
case 1066:
case 552:
case 2523:
case 2248:
case 3498:
case 1960:
case 701:
case 2257:
case 3077:
case 1358:
case 839:
case 1897:
case 884:
case 1938:
case 410:
case 717:
case 2476:
case 2698:
case 289:
case 2345:
case 1318:
case 879:
case 506:
case 2665:
case 1758:
case 234:
case 3585:
case 1099:
case 125:
case 3471:
case 1062:
case 2830:
case 1594:
case 705:
case 2217:
case 358:
case 3672:
case 2768:
case 279:
case 1655:
case 1397:
case 3272:
case 2795:
case 866:
case 165:
case 3914:
case 1858:
case 3734:
case 2265:
case 32:
case 2910:
case 226:
case 2016:
case 3779:
case 3902:
case 3171:
case 3022:
case 2686:
case 2427:
case 469:
case 2969:
case 1577:
case 3978:
case 370:
case 3705:
case 3482:
case 1993:
case 1551:
case 3513:
case 3133:
case 476:
case 2946:
case 799:
case 2389:
case 1339:
case 2127:
case 3608:
case 380:
case 4059:
case 3182:
case 3805:
case 3549:
case 1500:
case 3054:
case 3325:
case 3559:
case 1733:
case 2904:
case 1913:
case 3331:
case 4049:
case 461:
case 1782:
case 783:
case 650:
case 2274:
case 1541:
case 1386:
case 950:
case 2883:
case 2674:
case 4066:
case 588:
case 421:
case 1578:
case 791:
case 2832:
case 1882:
case 1966:
case 2428:
case 550:
case 3447:
case 3458:
case 988:
case 1019:
case 2503:
case 2184:
case 1134:
case 1514:
case 871:
case 1848:
case 893:
case 1857:
case 3180:
case 1365:
case 2767:
case 281:
case 136:
case 1771:
case 1398:
case 1502:
case 412:
case 1245:
case 2096:
case 408:
case 3926:
case 235:
case 3994:
case 3091:
case 293:
case 2024:
case 2867:
case 271:
case 2529:
case 1317:
case 1871:
case 3345:
case 727:
case 3063:
case 366:
case 3476:
case 420:
case 389:
case 1673:
case 4029:
case 334:
case 1590:
case 2834:
case 3895:
case 2471:
case 3830:
case 2148:
case 1535:
case 1115:
case 3:
case 790:
case 2672:
case 82:
case 111:
case 497:
case 1521:
case 2879:
case 153:
case 258:
case 86:
case 3768:
case 943:
case 1903:
case 1784:
case 2011:
case 3910:
case 22:
case 141:
case 651:
case 2902:
case 2171:
case 326:
case 1415:
case 3016:
case 3298:
case 1167:
case 2779:
case 48:
case 543:
case 162:
case 718:
case 2681:
case 1023:
case 270:
case 1432:
case 880:
case 414:
case 2566:
case 47:
case 1183:
case 3040:
case 1504:
case 702:
case 122:
case 1231:
case 2281:
case 3127:
case 3389:
case 3946:
case 2182:
case 2608:
case 2044:
case 3783:
case 637:
case 2559:
case 2054:
case 2951:
case 445:
case 1546:
case 1381:
case 2331:
case 3912:
case 3956:
case 2900:
case 3274:
case 3674:
case 832:
case 3088:
case 1064:
case 1827:
case 1961:
case 1569:
case 2593:
case 937:
case 3297:
case 1372:
case 3503:
case 1776:
case 1195:
case 2180:
case 1510:
case 959:
case 3767:
case 3618:
case 381:
case 2020:
case 1495:
case 3218:
case 3990:
case 2926:
case 2147:
case 1876:
case 2994:
case 3715:
case 3935:
case 1430:
case 2480:
case 3921:
case 3697:
case 1634:
case 3315:
case 2078:
case 3247:
case 2497:
case 1872:
case 3855:
case 3367:
case 422:
case 2944:
case 1550:
case 577:
case 3280:
case 3658:
case 385:
case 17:
case 3647:
case 4009:
case 1234:
case 2284:
case 1376:
case 1445:
case 3046:
case 1772:
case 792:
case 1909:
case 2197:
case 654:
case 700:
case 3836:
case 120:
case 3107:
case 4075:
case 2831:
case 3470:
case 1708:
case 197:
case 411:
case 872:
case 3963:
case 687:
case 2439:
case 1489:
case 2002:
case 2174:
case 987:
case 3952:
case 3736:
case 554:
case 3407:
case 3010:
case 2543:
case 2228:
case 2014:
case 2731:
case 2911:
case 2519:
case 1327:
case 882:
case 2725:
case 1605:
case 830:
case 1516:
case 1552:
case 1136:
case 2186:
case 3282:
case 756:
case 419:
case 3181:
case 2227:
case 3789:
case 2553:
case 1770:
case 3233:
case 3408:
case 3633:
case 3021:
case 230:
case 2094:
case 2627:
case 3035:
case 2486:
case 3090:
case 3682:
case 357:
case 3889:
case 3108:
case 1563:
case 2000:
case 2379:
case 31:
case 3330:
case 2906:
case 3657:
case 2276:
case 3648:
case 3004:
case 3172:
case 3368:
case 2954:
case 3845:
case 34:
case 1155:
case 1587:
case 2117:
case 2465:
case 115:
case 3257:
case 246:
case 2498:
case 816:
case 1964:
case 1061:
case 3988:
case 3074:
case 3250:
case 3688:
case 1580:
case 1894:
case 2206:
case 3114:
case 3534:
case 2595:
case 3039:
case 3201:
case 2254:
case 2410:
case 3337:
case 2654:
case 378:
case 532:
case 2323:
case 3785:
case 2007:
case 1726:
case 1264:
case 1558:
case 3414:
case 3650:
case 3288:
case 1700:
case 932:
case 2620:
case 3696:
case 3982:
case 2861:
case 2691:
case 3353:
case 2927:
case 1311:
case 1877:
case 3713:
case 3933:
case 1159:
case 3242:
case 3624:
case 3097:
case 2469:
case 3505:
case 3224:
case 3766:
case 350:
case 2761:
case 237:
case 2375:
case 1851:
case 3018:
case 3296:
case 632:
case 3793:
case 80:
case 1841:
case 711:
case 2611:
case 753:
case 190:
case 1449:
case 1391:
case 3177:
case 3451:
case 127:
case 1320:
case 3263:
case 3652:
case 3616:
case 3893:
case 56:
case 1741:
case 3252:
case 670:
case 306:
case 3216:
case 2112:
case 3343:
case 3065:
case 167:
case 1878:
case 2211:
case 558:
case 1533:
case 2072:
case 1113:
case 1802:
case 762:
case 251:
case 3287:
case 2121:
case 3194:
case 1223:
case 1185:
case 2803:
case 2190:
case 3958:
case 1814:
case 2364:
case 2008:
case 958:
case 2222:
case 580:
case 3494:
case 2244:
case 492:
case 1979:
case 2622:
case 2567:
case 1485:
case 2435:
case 3980:
case 148:
case 243:
case 851:
case 2421:
case 2703:
case 1714:
case 1623:
case 1354:
case 92:
case 722:
case 3687:
case 2140:
case 530:
case 3033:
case 3838:
case 363:
case 1754:
case 2864:
case 916:
case 1314:
case 3635:
case 1437:
case 3144:
case 156:
case 646:
case 946:
case 3290:
case 2226:
case 2764:
case 255:
case 616:
case 3235:
case 2555:
case 323:
case 1517:
case 3204:
case 546:
case 3531:
case 352:
case 3111:
case 2463:
case 3719:
case 2076:
case 3939:
case 1891:
case 3743:
case 1462:
case 2200:
case 630:
case 2116:
case 2600:
case 3411:
case 1453:
case 1720:
case 3656:
case 2277:
case 516:
case 1378:
case 1162:
case 1199:
case 715:
case 2651:
case 3393:
case 2641:
case 672:
case 714:
case 2196:
case 2775:
case 1811:
case 1377:
case 3853:
case 277:
case 2908:
case 3191:
case 3762:
case 3646:
case 2278:
case 3799:
case 1443:
case 3366:
case 982:
case 2124:
case 1351:
case 2142:
case 1925:
case 3313:
case 448:
case 2875:
case 877:
case 192:
case 2084:
case 744:
case 2981:
case 287:
case 2678:
case 2589:
case 3753:
case 3246:
case 3862:
case 4031:
case 3349:
case 1574:
case 3491:
case 1079:
case 1300:
case 3986:
case 77:
case 2602:
case 2809:
case 1518:
case 1138:
case 490:
case 3454:
case 1394:
case 2450:
case 2723:
case 338:
case 1229:
case 427:
case 3737:
case 1005:
case 2972:
case 4073:
case 1597:
case 467:
case 3154:
case 1822:
case 2214:
case 1203:
case 2488:
case 3210:
case 2028:
case 2823:
case 3106:
case 1744:
case 2150:
case 1888:
case 168:
case 1109:
case 2997:
case 674:
case 1701:
case 1572:
case 1083:
case 2422:
case 3303:
case 1685:
case 2635:
case 3027:
case 1310:
case 2690:
case 939:
case 1032:
case 2573:
case 3626:
case 64:
case 984:
case 557:
case 2144:
case 1788:
case 2122:
case 742:
case 2290:
case 94:
case 3440:
case 639:
case 4045:
case 1285:
case 708:
case 355:
case 974:
case 223:
case 128:
case 2221:
case 3555:
case 1896:
case 3251:
case 1666:
case 1213:
case 3970:
case 3076:
case 2939:
case 1989:
case 1346:
case 252:
case 3463:
case 2111:
case 54:
case 3677:
case 2256:
case 3536:
case 3152:
case 574:
case 1824:
case 3116:
case 2071:
case 1796:
case 1842:
case 2411:
case 1392:
case 903:
case 1508:
case 2819:
case 117:
case 491:
case 2656:
case 1369:
case 2048:
case 3416:
case 721:
case 2057:
case 2843:
case 957:
case 101:
case 584:
case 3651:
case 2604:
case 1613:
case 2120:
case 3196:
case 3641:
case 585:
case 1763:
case 2047:
case 2853:
case 3361:
case 2269:
case 2292:
case 3442:
case 2058:
case 2799:
case 2646:
case 1507:
case 769:
case 2191:
case 3124:
case 1816:
case 1852:
case 109:
case 1068:
case 1570:
case 1259:
case 4036:
case 387:
case 531:
case 3424:
case 2669:
case 499:
case 1356:
case 2080:
case 1716:
case 1752:
case 1936:
case 3241:
case 3809:
case 3545:
case 3602:
case 4055:
case 1164:
case 931:
case 3401:
case 3450:
case 195:
case 3614:
case 1335:
case 2737:
case 1787:
case 2917:
case 2406:
case 238:
case 1321:
case 1464:
case 1740:
case 3101:
case 3972:
case 3488:
case 2965:
case 2210:
case 39:
case 3028:
case 3150:
case 296:
case 2837:
case 675:
case 1821:
case 2579:
case 288:
case 2688:
case 183:
case 1638:
case 1967:
case 2971:
case 447:
case 671:
case 878:
case 1835:
case 3110:
case 740:
case 3595:
case 2039:
case 1089:
case 981:
case 2114:
case 1660:
case 1103:
case 359:
case 3309:
case 173:
case 278:
case 710:
case 3410:
case 1129:
case 2601:
case 1387:
case 2785:
case 681:
case 3007:
case 1260:
case 3323:
case 993:
case 971:
case 935:
case 2650:
case 4015:
case 1238:
case 2414:
case 1403:
case 850:
case 2478:
case 3620:
case 2696:
case 2141:
case 1316:
case 764:
case 468:
case 1528:
case 1243:
case 1712:
case 571:
case 3861:
case 3927:
case 3691:
case 2097:
case 3469:
case 3492:
case 2713:
case 2933:
case 4032:
case 1704:
case 2242:
case 2766:
case 2224:
case 2505:
case 494:
case 2642:
case 2178:
case 250:
case 798:
case 3291:
case 2399:
case 428:
case 3169:
case 1643:
case 3761:
case 337:
case 3220:
case 1045:
case 1363:
case 2296:
case 2018:
case 2813:
case 725:
case 2793:
case 3412:
case 1324:
case 3456:
case 1653:
case 3611:
case 526:
case 2451:
case 3404:
case 433:
case 1161:
case 2859:
case 495:
case 206:
case 2098:
case 2100:
case 2893:
case 2663:
case 2343:
case 3112:
case 30:
case 3532:
case 3156:
case 1746:
case 1662:
case 1527:
case 2319:
case 2477:
case 1342:
case 3104:
case 313:
case 1237:
case 2287:
case 3729:
case 2360:
case 626:
case 2194:
case 1810:
case 679:
case 3190:
case 2126:
case 3222:
case 9:
case 3644:
case 3622:
case 3567:
case 4095:
case 6:
case 3435:
case 3829:
case 3244:
case 409:
case 2980:
case 1710:
case 926:
case 689:
case 1995:
case 666:
case 1576:
case 634:
case 3490:
case 2240:
case 4030:
case 777:
case 2872:
case 1922:
case 2679:
case 844:
case 28:
case 2634:
case 1684:
case 3695:
case 3668:
case 386:
case 3937:
case 3898:
case 3059:
case 2501:
case 3268:
case 1197:
case 814:
case 2376:
case 2234:
case 1418:
case 1773:
case 3230:
case 1944:
case 1041:
case 600:
case 376:
case 3371:
case 1825:
case 754:
case 3520:
case 2975:
case 2596:
case 182:
case 1628:
case 1831:
case 2881:
case 297:
case 458:
case 3591:
case 3999:
case 46:
case 2029:
case 3886:
case 2542:
case 3333:
case 500:
case 897:
case 172:
case 1731:
case 1014:
case 2327:
case 3953:
case 260:
case 1543:
case 1174:
case 1002:
case 992:
case 3786:
case 79:
case 1227:
case 3511:
case 3919:
case 1553:
case 3232:
case 3943:
case 3774:
case 1186:
case 3431:
case 4091:
case 2870:
case 1026:
case 3839:
case 1627:
case 1991:
case 1094:
case 4020:
case 1486:
case 2436:
case 3085:
case 2707:
case 3683:
case 3874:
case 1051:
case 3797:
case 3818:
case 1954:
case 1334:
case 2384:
case 1276:
case 2455:
case 3173:
case 1906:
case 1417:
case 3380:
case 815:
case 3544:
case 1379:
case 1198:
case 432:
case 116:
case 3938:
case 3667:
case 3718:
case 3897:
case 2061:
case 3347:
case 215:
case 3215:
case 1498:
case 146:
case 1676:
case 3473:
case 1117:
case 2587:
case 321:
case 253:
case 211:
case 3880:
case 1157:
case 325:
case 3062:
case 2467:
case 1585:
case 3758:
case 3747:
case 207:
case 3318:
case 4014:
case 1171:
case 472:
case 902:
case 2167:
case 1779:
case 527:
case 618:
case 241:
case 1011:
case 2903:
case 2784:
case 1914:
case 3053:
case 3847:
case 3655:
case 3397:
case 1272:
case 948:
case 2432:
case 3037:
case 2307:
case 751:
case 262:
case 170:
case 2023:
case 2483:
case 3577:
case 822:
case 862:
case 1941:
case 690:
case 2512:
case 1182:
case 1608:
case 3339:
case 1281:
case 222:
case 518:
case 1133:
case 1513:
case 967:
case 627:
case 3551:
case 3386:
case 3541:
case 3949:
case 3782:
case 4051:
case 759:
case 4000:
case 2381:
case 416:
case 2546:
case 3289:
case 132:
case 1270:
case 1559:
case 3733:
case 1951:
case 3105:
case 3882:
case 3060:
case 3578:
case 310:
case 2308:
case 2569:
case 3833:
case 3038:
case 446:
case 3771:
case 336:
case 3179:
case 3365:
case 3043:
case 1180:
case 3848:
case 23:
case 1373:
case 3134:
case 1458:
case 2372:
case 849:
case 219:
case 1480:
case 4026:
case 83:
case 398:
case 3757:
case 3985:
case 3748:
case 3479:
case 1158:
case 1926:
case 1147:
case 4094:
case 3434:
case 2495:
case 1020:
case 353:
case 2099:
case 3467:
case 3535:
case 1830:
case 2880:
case 2062:
case 225:
case 699:
case 1665:
case 2747:
case 1895:
case 3590:
case 2758:
case 3075:
case 1868:
case 166:
case 865:
case 1063:
case 3167:
case 1298:
case 1016:
case 126:
case 1052:
case 825:
case 341:
case 2780:
case 1730:
case 1910:
case 2847:
case 1795:
case 3903:
case 1617:
case 179:
case 505:
case 2397:
case 2037:
case 4092:
case 3432:
case 599:
case 3828:
case 1969:
case 1561:
case 1992:
case 2636:
case 1427:
case 905:
case 475:
case 1286:
case 2500:
case 3556:
case 3132:
case 1946:
case 1127:
case 3231:
case 1389:
case 322:
case 3009:
case 3370:
case 2551:
case 484:
case 1050:
case 2386:
case 439:
case 4004:
case 1732:
case 41:
case 2913:
case 4012:
case 1783:
case 1904:
case 2105:
case 2966:
case 474:
case 840:
case 2578:
case 210:
case 1832:
case 2882:
case 778:
case 3592:
case 44:
case 3961:
case 3064:
case 1618:
case 2645:
case 1767:
case 2502:
case 236:
case 691:
case 898:
case 2043:
case 983:
case 2514:
case 2134:
case 1503:
case 3372:
case 824:
case 319:
case 1921:
case 1697:
case 1355:
case 1867:
case 193:
case 750:
case 4090:
case 3430:
case 2985:
case 2748:
case 1715:
case 2479:
case 683:
case 836:
case 403:
case 973:
case 991:
case 4021:
case 1096:
case 3495:
case 1218:
case 4035:
case 2434:
case 1484:
case 3588:
case 3679:
case 3145:
case 4087:
case 1258:
case 2630:
case 509:
case 2357:
case 2695:
case 876:
case 38:
case 1315:
case 2348:
case 1987:
case 2668:
case 269:
case 2717:
case 1755:
case 2554:
case 229:
case 3501:
case 2295:
case 1280:
case 276:
case 2371:
case 2798:
case 3279:
case 695:
case 1855:
case 2520:
case 3489:
case 4:
case 609:
case 397:
case 1470:
case 466:
case 320:
case 489:
case 3524:
case 2886:
case 3605:
case 2333:
case 1170:
case 3542:
case 3189:
case 2953:
case 360:
case 4016:
case 3003:
case 3781:
case 909:
case 2283:
case 2125:
case 1942:
case 528:
case 2919:
case 1789:
case 481:
case 1181:
case 2131:
case 3328:
case 808:
case 1282:
case 2232:
case 3552:
case 435:
case 1481:
case 812:
case 3870:
case 3563:
case 493:
case 4024:
case 647:
case 471:
case 901:
case 2425:
case 2632:
case 3436:
case 1035:
case 103:
case 208:
case 1633:
case 2874:
case 261:
case 2818:
case 1509:
case 694:
case 1901:
case 95:
case 3540:
case 501:
case 4050:
case 2615:
case 1648:
case 821:
case 2380:
case 2173:
case 11:
case 2049:
case 2544:
case 2667:
case 1988:
case 2938:
case 1745:
case 174:
case 3061:
case 2347:
case 4088:
case 1523:
case 1257:
case 2066:
case 994:
case 3587:
case 2473:
case 964:
case 1534:
case 2890:
case 2103:
case 4071:
case 2660:
case 1114:
case 891:
case 698:
case 3664:
case 283:
case 1688:
case 2821:
case 1074:
case 1102:
case 452:
case 1971:
case 1288:
case 4048:
case 1650:
case 1414:
case 3322:
case 540:
case 998:
case 3726:
case 3264:
case 3558:
case 2735:
case 1785:
case 636:
case 1957:
case 3794:
case 2260:
case 924:
case 2721:
case 2129:
case 1097:
case 1624:
case 3751:
case 804:
case 3159:
case 4082:
case 2983:
case 2704:
case 598:
case 940:
case 1353:
case 463:
case 2712:
case 3493:
case 2243:
case 2756:
case 4033:
case 2932:
case 2528:
case 1749:
case 3700:
case 2316:
case 2352:
case 3851:
case 564:
case 1813:
case 3777:
case 3459:
case 536:
case 640:
case 2619:
case 150:
case 1399:
case 771:
case 2856:
case 793:
case 1849:
case 1505:
case 1766:
case 735:
case 734:
case 1652:
case 1263:
case 2396:
case 1859:
case 3320:
case 2846:
case 2769:
case 1177:
case 2161:
case 3391:
case 3778:
case 205:
case 1400:
case 2262:
case 1017:
case 3166:
case 3905:
case 7:
case 565:
case 3841:
case 1793:
case 2342:
case 525:
case 2461:
case 3113:
case 3533:
case 1759:
case 2699:
case 2253:
case 2892:
case 2662:
case 3466:
case 1065:
case 726:
case 106:
case 3675:
case 805:
case 1893:
case 1100:
case 2388:
case 3814:
case 1958:
case 3557:
case 1287:
case 318:
case 1640:
case 1687:
case 2968:
case 4080:
case 3025:
case 1426:
case 2576:
case 3623:
case 2995:
case 3714:
case 302:
case 2710:
case 1086:
case 3702:
case 625:
case 2350:
case 1494:
case 3598:
case 3302:
case 828:
case 621:
case 961:
case 2310:
case 542:
case 1860:
case 2032:
case 1690:
case 1635:
case 3314:
case 1621:
case 3754:
case 2888:
case 163:
case 1838:
case 2083:
case 2572:
case 2850:
case 512:
case 85:
case 2285:
case 2123:
case 3806:
case 661:
case 294:
case 868:
case 921:
case 1290:
case 2788:
case 2945:
case 757:
case 2249:
case 4039:
case 3586:
case 71:
case 1071:
case 912:
case 3153:
case 1939:
case 521:
case 1719:
case 642:
case 2346:
case 4074:
case 1359:
case 817:
case 2896:
case 2213:
case 201:
case 2613:
case 1604:
case 561:
case 3199:
case 1048:
case 1843:
case 3378:
case 3791:
case 847:
case 3261:
case 1612:
case 3453:
case 2796:
case 2649:
case 1411:
case 2842:
case 2852:
case 731:
case 1191:
case 1269:
case 1853:
case 3377:
case 2752:
case 2716:
case 3079:
case 3574:
case 1899:
case 3143:
case 1692:
case 2030:
case 2095:
case 4086:
case 1246:
case 3931:
case 392:
case 2068:
case 3351:
case 2863:
case 1406:
case 3005:
case 2787:
case 1737:
case 2955:
case 3844:
case 138:
case 3394:
case 3603:
case 2335:
case 3326:
case 2390:
case 1610:
case 3722:
case 3518:
case 2887:
case 196:
case 3460:
case 1106:
case 686:
case 3973:
case 4065:
case 2464:
case 256:
case 3032:
case 1864:
case 1694:
case 945:
case 3685:
case 1303:
case 3083:
case 3701:
case 3572:
case 368:
case 3888:
case 437:
case 1555:
case 1187:
case 1329:
case 2517:
case 328:
case 730:
case 1294:
case 3123:
case 856:
case 1226:
case 394:
case 1200:
case 1116:
case 3824:
case 3249:
case 2661:
case 2891:
case 1677:
case 459:
case 1463:
case 2153:
case 3989:
case 1076:
case 3475:
case 3213:
case 1970:
case 3666:
case 746:
case 3724:
case 2162:
case 2199:
case 1907:
case 1416:
case 3015:
case 1452:
case 3369:
case 317:
case 3392:
case 3842:
case 2720:
case 3175:
case 3659:
case 4008:
case 1124:
case 1278:
case 544:
case 2377:
case 2811:
case 1361:
case 177:
case 892:
case 3763:
case 660:
case 2419:
case 1196:
case 920:
case 3936:
case 3752:
case 2300:
case 3716:
case 2143:
case 3356:
case 1424:
case 1981:
case 2711:
case 1496:
case 3095:
case 2119:
case 1589:
case 2925:
case 1142:
case 3693:
case 2351:
case 3570:
case 3068:
case 697:
case 309:
case 3304:
case 3955:
case 3321:
case 67:
case 2844:
case 560:
case 914:
case 2160:
case 200:
case 154:
case 3390:
case 3840:
case 2138:
case 1188:
case 1809:
case 1202:
case 1150:
case 3887:
case 1028:
case 4072:
case 2973:
case 2438:
case 1972:
case 97:
case 40:
case 1101:
case 1709:
case 649:
case 1254:
case 1568:
case 3103:
case 3584:
case 3660:
case 1976:
case 2580:
case 1110:
case 2664:
case 3835:
case 2344:
case 4076:
case 3821:
case 3403:
case 2322:
case 3790:
case 2264:
case 2726:
case 2547:
case 1007:
case 3735:
case 63:
case 391:
case 1654:
case 949:
case 2159:
case 3704:
case 2751:
case 1691:
case 1861:
case 2877:
case 3219:
case 1146:
case 3712:
case 3528:
case 3243:
case 3316:
case 3352:
case 4027:
case 549:
case 1620:
case 3804:
case 1220:
case 3045:
case 137:
case 2459:
case 3643:
case 1192:
case 1761:
case 304:
case 2777:
case 3856:
case 3619:
case 2193:
case 2800:
case 962:
case 76:
case 2275:
case 2413:
case 1404:
case 3846:
case 3769:
case 1611:
case 2778:
case 3299:
case 2391:
case 1456:
case 2166:
case 454:
case 867:
case 3461:
case 2113:
case 1104:
case 1583:
case 3342:
case 3892:
case 1211:
case 3746:
case 511:
case 3699:
case 1112:
case 2466:
case 2741:
case 662:
case 2675:
case 507:
case 802:
case 2814:
case 1190:
case 1803:
case 1008:
case 953:
case 1364:
case 770:
case 522:
case 1729:
case 848:
case 1121:
case 3237:
case 641:
case 2609:
case 907:
case 477:
case 3301:
case 941:
case 607:
case 1081:
case 2934:
case 1703:
case 202:
case 3995:
case 3576:
case 3710:
case 3930:
case 143:
case 2571:
case 1244:
case 4084:
case 1435:
case 1567:
case 1622:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756749602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,];
var gg_b = "1756749602/";

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
