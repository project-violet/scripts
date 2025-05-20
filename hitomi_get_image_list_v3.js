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
case 3371:
case 4016:
case 3612:
case 2392:
case 2259:
case 1525:
case 3758:
case 2165:
case 758:
case 3431:
case 3341:
case 2189:
case 3638:
case 1713:
case 2937:
case 788:
case 1424:
case 3683:
case 762:
case 2517:
case 2630:
case 1209:
case 2295:
case 3366:
case 100:
case 2037:
case 2479:
case 2817:
case 452:
case 1669:
case 1685:
case 3104:
case 2339:
case 1782:
case 542:
case 378:
case 1466:
case 1251:
case 3508:
case 739:
case 3460:
case 3980:
case 2646:
case 895:
case 3856:
case 1850:
case 604:
case 2582:
case 922:
case 3002:
case 2882:
case 3556:
case 1181:
case 849:
case 694:
case 1678:
case 3902:
case 629:
case 3687:
case 2800:
case 3324:
case 697:
case 2033:
case 805:
case 3080:
case 2813:
case 1652:
case 4050:
case 791:
case 82:
case 887:
case 2087:
case 1591:
case 966:
case 3528:
case 1755:
case 1940:
case 3946:
case 2680:
case 57:
case 177:
case 920:
case 1732:
case 64:
case 854:
case 1970:
case 3976:
case 2602:
case 3166:
case 2705:
case 1160:
case 1070:
case 463:
case 783:
case 1647:
case 2820:
case 3304:
case 3688:
case 2139:
case 2467:
case 3046:
case 753:
case 3481:
case 475:
case 636:
case 2912:
case 2599:
case 3211:
case 2244:
case 3810:
case 3726:
case 2994:
case 3030:
case 1381:
case 2274:
case 2083:
case 4025:
case 1516:
case 1404:
case 2938:
case 1936:
case 2855:
case 2518:
case 284:
case 2463:
case 254:
case 3675:
case 2818:
case 2555:
case 102:
case 726:
case 1131:
case 2832:
case 450:
case 480:
case 3742:
case 3124:
case 3309:
case 3522:
case 2134:
case 1712:
case 3260:
case 1451:
case 1266:
case 3028:
case 3613:
case 807:
case 2887:
case 1794:
case 1606:
case 793:
case 3600:
case 2920:
case 1271:
case 3907:
case 2608:
case 2627:
case 1540:
case 897:
case 2736:
case 3546:
case 2401:
case 829:
case 2020:
case 3682:
case 4086:
case 3876:
case 1570:
case 2656:
case 894:
case 579:
case 3576:
case 649:
case 2740:
case 3617:
case 2918:
case 3530:
case 2397:
case 3830:
case 294:
case 2459:
case 168:
case 1836:
case 3010:
case 2955:
case 1224:
case 2770:
case 2932:
case 3231:
case 229:
case 71:
case 216:
case 2279:
case 872:
case 3778:
case 1409:
case 1111:
case 207:
case 1905:
case 2838:
case 522:
case 2018:
case 371:
case 2249:
case 204:
case 3910:
case 2055:
case 2538:
case 2894:
case 1733:
case 3618:
case 3023:
case 1664:
case 2786:
case 2444:
case 3109:
case 3655:
case 3411:
case 2845:
case 492:
case 1204:
case 2474:
case 367:
case 2545:
case 2193:
case 836:
case 566:
case 870:
case 2319:
case 798:
case 2837:
case 180:
case 24:
case 746:
case 1657:
case 654:
case 2082:
case 3502:
case 3056:
case 2197:
case 474:
case 2913:
case 1737:
case 1490:
case 3620:
case 62:
case 3927:
case 1311:
case 2833:
case 3880:
case 2421:
case 855:
case 2000:
case 236:
case 3743:
case 1642:
case 175:
case 4040:
case 2462:
case 1950:
case 3072:
case 1393:
case 2738:
case 172:
case 931:
case 3548:
case 3848:
case 3239:
case 2606:
case 1887:
case 600:
case 3578:
case 538:
case 882:
case 2615:
case 3395:
case 3878:
case 2451:
case 2712:
case 690:
case 3942:
case 4033:
case 3214:
case 2570:
case 513:
case 3972:
case 1608:
case 2840:
case 3359:
case 1119:
case 2783:
case 2540:
case 3953:
case 3885:
case 4075:
case 1099:
case 449:
case 129:
case 589:
case 1932:
case 31:
case 1583:
case 1918:
case 3964:
case 4045:
case 2536:
case 1955:
case 1883:
case 3484:
case 1459:
case 1249:
case 495:
case 1018:
case 1623:
case 282:
case 1838:
case 1538:
case 3174:
case 3761:
case 104:
case 1495:
case 3053:
case 1279:
case 1999:
case 1512:
case 2905:
case 107:
case 2409:
case 50:
case 1032:
case 3573:
case 2204:
case 185:
case 2653:
case 863:
case 911:
case 1474:
case 3873:
case 346:
case 3543:
case 1875:
case 2733:
case 1398:
case 3780:
case 3321:
case 875:
case 1334:
case 398:
case 518:
case 1444:
case 3843:
case 1254:
case 1837:
case 3289:
case 2396:
case 4012:
case 1610:
case 1537:
case 42:
case 487:
case 9:
case 767:
case 544:
case 1184:
case 2925:
case 3159:
case 999:
case 927:
case 1588:
case 2737:
case 170:
case 1888:
case 1900:
case 3847:
case 880:
case 3101:
case 4087:
case 3877:
case 850:
case 3915:
case 1982:
case 1267:
case 3058:
case 3535:
case 2950:
case 1462:
case 3552:
case 1833:
case 3434:
case 3691:
case 1607:
case 2311:
case 2886:
case 263:
case 2672:
case 1013:
case 2586:
case 3006:
case 136:
case 1000:
case 1421:
case 149:
case 2713:
case 1189:
case 1937:
case 3154:
case 362:
case 3073:
case 1045:
case 2525:
case 105:
case 3973:
case 3756:
case 1750:
case 4018:
case 388:
case 3636:
case 938:
case 3943:
case 1630:
case 2360:
case 3727:
case 1037:
case 200:
case 1582:
case 3439:
case 3349:
case 2181:
case 1882:
case 3167:
case 472:
case 3047:
case 3379:
case 3640:
case 2717:
case 1933:
case 2648:
case 3052:
case 1661:
case 1988:
case 99:
case 1468:
case 2331:
case 1500:
case 339:
case 778:
case 989:
case 1033:
case 3977:
case 2678:
case 1622:
case 3815:
case 4020:
case 3297:
case 3035:
case 2471:
case 890:
case 650:
case 1389:
case 2732:
case 277:
case 1114:
case 2290:
case 947:
case 680:
case 3842:
case 3572:
case 2755:
case 1087:
case 3219:
case 2652:
case 5:
case 1192:
case 2718:
case 933:
case 3872:
case 4082:
case 3686:
case 383:
case 2940:
case 3826:
case 1139:
case 1987:
case 1716:
case 2647:
case 3948:
case 925:
case 511:
case 1467:
case 3526:
case 4000:
case 3557:
case 1221:
case 1705:
case 3298:
case 1602:
case 436:
case 918:
case 892:
case 3857:
case 3234:
case 2799:
case 1083:
case 455:
case 1274:
case 675:
case 360:
case 663:
case 2505:
case 326:
case 527:
case 12:
case 187:
case 3553:
case 319:
case 2673:
case 599:
case 1012:
case 3985:
case 1532:
case 1983:
case 184:
case 1518:
case 1094:
case 2643:
case 2229:
case 2936:
case 1038:
case 3864:
case 154:
case 2617:
case 1301:
case 3583:
case 1746:
case 3955:
case 2129:
case 2830:
case 394:
case 782:
case 462:
case 506:
case 1885:
case 517:
case 11:
case 397:
case 316:
case 3279:
case 1053:
case 458:
case 3812:
case 678:
case 2778:
case 488:
case 3623:
case 1064:
case 271:
case 2903:
case 3249:
case 3838:
case 3594:
case 3055:
case 2910:
case 3538:
case 3894:
case 1493:
case 1174:
case 2748:
case 941:
case 928:
case 1878:
case 1395:
case 1121:
case 2260:
case 372:
case 2028:
case 2613:
case 1072:
case 521:
case 2561:
case 151:
case 915:
case 3887:
case 4077:
case 1162:
case 1926:
case 1239:
case 2907:
case 1972:
case 2928:
case 1292:
case 3401:
case 1497:
case 2546:
case 3020:
case 1026:
case 3736:
case 2682:
case 2190:
case 2876:
case 1650:
case 4052:
case 483:
case 3082:
case 401:
case 1958:
case 4048:
case 1419:
case 1915:
case 1547:
case 2496:
case 537:
case 370:
case 13:
case 3913:
case 2027:
case 665:
case 763:
case 1434:
case 3833:
case 2880:
case 3628:
case 1344:
case 956:
case 1691:
case 986:
case 3421:
case 2580:
case 3267:
case 1058:
case 2773:
case 2956:
case 1015:
case 146:
case 426:
case 1195:
case 1321:
case 2618:
case 3334:
case 3575:
case 264:
case 4069:
case 2411:
case 198:
case 385:
case 1573:
case 3845:
case 267:
case 3193:
case 355:
case 1873:
case 2735:
case 2699:
case 2777:
case 3184:
case 3837:
case 3603:
case 2923:
case 2747:
case 1616:
case 34:
case 3537:
case 3610:
case 2390:
case 2460:
case 2527:
case 3088:
case 2508:
case 948:
case 2980:
case 3646:
case 1439:
case 3582:
case 2002:
case 451:
case 1670:
case 3882:
case 1815:
case 1977:
case 2902:
case 3725:
case 1297:
case 1858:
case 493:
case 1515:
case 1052:
case 3661:
case 3800:
case 2324:
case 906:
case 1723:
case 3033:
case 2080:
case 2612:
case 3259:
case 3392:
case 1073:
case 1163:
case 305:
case 1043:
case 2694:
case 2341:
case 349:
case 2431:
case 162:
case 3937:
case 3189:
case 1943:
case 188:
case 1636:
case 2683:
case 3630:
case 3517:
case 3295:
case 1708:
case 3479:
case 921:
case 1756:
case 1293:
case 3750:
case 878:
case 3339:
case 395:
case 3449:
case 4064:
case 1069:
case 498:
case 556:
case 3912:
case 1085:
case 3899:
case 446:
case 126:
case 2030:
case 2503:
case 702:
case 3994:
case 3938:
case 2510:
case 1149:
case 1564:
case 384:
case 3855:
case 3038:
case 3555:
case 2772:
case 3791:
case 1864:
case 2675:
case 937:
case 1553:
case 32:
case 3012:
case 2742:
case 1985:
case 2124:
case 265:
case 3532:
case 1853:
case 1489:
case 865:
case 2171:
case 2946:
case 3680:
case 3192:
case 2633:
case 1686:
case 1872:
case 2828:
case 1078:
case 43:
case 3114:
case 873:
case 2753:
case 2976:
case 3365:
case 1842:
case 1298:
case 3705:
case 3602:
case 2166:
case 2922:
case 4006:
case 664:
case 777:
case 1234:
case 3987:
case 1826:
case 3262:
case 667:
case 2961:
case 1703:
case 2481:
case 774:
case 3467:
case 1526:
case 1856:
case 2349:
case 2935:
case 3850:
case 532:
case 2439:
case 2167:
case 4028:
case 3181:
case 1556:
case 2379:
case 1508:
case 3251:
case 2047:
case 1460:
case 2952:
case 1980:
case 1808:
case 3986:
case 1827:
case 1687:
case 3648:
case 2052:
case 3331:
case 1080:
case 2723:
case 2414:
case 2035:
case 2977:
case 3678:
case 862:
case 2492:
case 3471:
case 1341:
case 1694:
case 1706:
case 3713:
case 262:
case 3424:
case 1823:
case 795:
case 2073:
case 3825:
case 2284:
case 4003:
case 3669:
case 2293:
case 651:
case 569:
case 2756:
case 1104:
case 471:
case 681:
case 1683:
case 288:
case 2636:
case 3209:
case 749:
case 2708:
case 2367:
case 467:
case 3036:
case 1726:
case 1030:
case 3720:
case 3816:
case 3404:
case 1803:
case 3516:
case 512:
case 1510:
case 784:
case 260:
case 464:
case 3805:
case 1211:
case 226:
case 72:
case 787:
case 891:
case 1757:
case 219:
case 853:
case 2553:
case 883:
case 2489:
case 2853:
case 63:
case 3229:
case 3936:
case 2564:
case 1930:
case 1675:
case 302:
case 2728:
case 2078:
case 1022:
case 3732:
case 608:
case 2842:
case 1753:
case 4008:
case 3290:
case 1061:
case 2219:
case 4056:
case 2363:
case 3755:
case 1507:
case 283:
case 3940:
case 1807:
case 3891:
case 1764:
case 3718:
case 1171:
case 1961:
case 2948:
case 3647:
case 2826:
case 1688:
case 2526:
case 96:
case 291:
case 2978:
case 1166:
case 3160:
case 2234:
case 646:
case 3799:
case 1076:
case 576:
case 2885:
case 893:
case 2569:
case 2953:
case 2869:
case 21:
case 716:
case 704:
case 3536:
case 1617:
case 2484:
case 1129:
case 1010:
case 3836:
case 382:
case 1748:
case 3916:
case 352:
case 2493:
case 1910:
case 803:
case 1351:
case 3111:
case 3409:
case 2722:
case 851:
case 3905:
case 1561:
case 969:
case 281:
case 3738:
case 1007:
case 3091:
case 4002:
case 3794:
case 2162:
case 1861:
case 251:
case 2578:
case 1309:
case 2957:
case 2042:
case 3712:
case 688:
case 2121:
case 2395:
case 1822:
case 1190:
case 2214:
case 3241:
case 1682:
case 4080:
case 3870:
case 3196:
case 2057:
case 2942:
case 910:
case 1928:
case 3991:
case 2730:
case 2497:
case 1546:
case 3490:
case 1008:
case 3737:
case 736:
case 619:
case 2906:
case 4022:
case 2958:
case 3657:
case 1329:
case 1802:
case 808:
case 2915:
case 2101:
case 2419:
case 2374:
case 1281:
case 3642:
case 660:
case 3745:
case 846:
case 912:
case 3950:
case 898:
case 1773:
case 2835:
case 2691:
case 3311:
case 4076:
case 3672:
case 1927:
case 626:
case 2552:
case 3775:
case 1580:
case 770:
case 2852:
case 3586:
case 1151:
case 3653:
case 691:
case 3204:
case 3025:
case 1735:
case 4030:
case 1632:
case 56:
case 2780:
case 74:
case 2543:
case 1411:
case 1109:
case 1752:
case 164:
case 465:
case 380:
case 2289:
case 930:
case 1390:
case 350:
case 208:
case 3396:
case 2265:
case 1747:
case 473:
case 83:
case 755:
case 1699:
case 3925:
case 653:
case 2159:
case 1777:
case 3960:
case 1966:
case 1122:
case 1744:
case 2068:
case 1486:
case 2521:
case 845:
case 2862:
case 2220:
case 1161:
case 1071:
case 211:
case 2729:
case 644:
case 88:
case 2:
case 1971:
case 1146:
case 735:
case 3228:
case 1291:
case 3207:
case 85:
case 824:
case 3060:
case 647:
case 980:
case 2488:
case 577:
case 3667:
case 1890:
case 2681:
case 1130:
case 3719:
case 3136:
case 502:
case 466:
case 1302:
case 2218:
case 227:
case 2232:
case 8:
case 3931:
case 2185:
case 2437:
case 3386:
case 1205:
case 1721:
case 3663:
case 1024:
case 3734:
case 2544:
case 2979:
case 1216:
case 2874:
case 1665:
case 1762:
case 592:
case 1689:
case 245:
case 2751:
case 1809:
case 2217:
case 638:
case 500:
case 2895:
case 1509:
case 2378:
case 369:
case 2494:
case 2438:
case 2348:
case 2063:
case 2483:
case 3797:
case 3340:
case 3679:
case 2963:
case 2559:
case 613:
case 1376:
case 3223:
case 3649:
case 590:
case 310:
case 741:
case 1102:
case 3784:
case 1330:
case 3081:
case 1440:
case 968:
case 479:
case 69:
case 2369:
case 3476:
case 2213:
case 659:
case 561:
case 60:
case 831:
case 2709:
case 4090:
case 3186:
case 1692:
case 982:
case 332:
case 3461:
case 2282:
case 2418:
case 2863:
case 166:
case 6:
case 2455:
case 1307:
case 2563:
case 3125:
case 580:
case 120:
case 440:
case 977:
case 3674:
case 1009:
case 247:
case 2995:
case 2275:
case 2499:
case 4024:
case 2357:
case 225:
case 3410:
case 2059:
case 3280:
case 825:
case 3305:
case 1286:
case 1127:
case 4041:
case 1310:
case 2867:
case 4071:
case 575:
case 1303:
case 992:
case 1491:
case 3428:
case 1763:
case 1698:
case 3789:
case 4066:
case 2353:
case 1051:
case 699:
case 3662:
case 833:
case 2106:
case 68:
case 844:
case 213:
case 1107:
case 1128:
case 859:
case 3246:
case 889:
case 89:
case 3996:
case 2868:
case 1990:
case 990:
case 179:
case 1323:
case 2157:
case 3222:
case 900:
case 3261:
case 3456:
case 631:
case 2126:
case 2879:
case 2212:
case 3659:
case 2944:
case 1327:
case 3911:
case 2579:
case 2766:
case 1103:
case 838:
case 714:
case 122:
case 2238:
case 3739:
case 3116:
case 2974:
case 2771:
case 3695:
case 2315:
case 1236:
case 1929:
case 568:
case 2358:
case 3230:
case 1425:
case 1768:
case 3714:
case 813:
case 259:
case 748:
case 3831:
case 289:
case 1693:
case 29:
case 2044:
case 3565:
case 4079:
case 1095:
case 3453:
case 1854:
case 1237:
case 54:
case 2009:
case 48:
case 1432:
case 499:
case 1342:
case 266:
case 1863:
case 4049:
case 424:
case 1563:
case 1372:
case 3093:
case 2328:
case 2307:
case 1245:
case 3781:
case 3320:
case 2804:
case 445:
case 2504:
case 555:
case 2416:
case 3117:
case 1499:
case 1275:
case 3243:
case 118:
case 2405:
case 409:
case 1704:
case 411:
case 3182:
case 1420:
case 3097:
case 2156:
case 2108:
case 1233:
case 3457:
case 2619:
case 536:
case 2951:
case 2754:
case 92:
case 987:
case 866:
case 3113:
case 640:
case 1288:
case 2634:
case 2763:
case 334:
case 3472:
case 3355:
case 1115:
case 954:
case 1868:
case 3034:
case 3098:
case 1021:
case 3406:
case 1172:
case 2128:
case 2240:
case 2107:
case 113:
case 3415:
case 1062:
case 3651:
case 3592:
case 2571:
case 642:
case 2749:
case 1482:
case 3539:
case 1287:
case 3839:
case 1962:
case 3248:
case 995:
case 3019:
case 2090:
case 822:
case 138:
case 2779:
case 1157:
case 3998:
case 2866:
case 1238:
case 2103:
case 2356:
case 1974:
case 431:
case 1549:
case 2029:
case 2110:
case 1294:
case 3199:
case 396:
case 1766:
case 2308:
case 2327:
case 507:
case 1944:
case 3300:
case 159:
case 1153:
case 1741:
case 597:
case 19:
case 189:
case 529:
case 1315:
case 1164:
case 3118:
case 594:
case 1358:
case 314:
case 2929:
case 4001:
case 3435:
case 2774:
case 3345:
case 3187:
case 3939:
case 3226:
case 1562:
case 1373:
case 3092:
case 2966:
case 3898:
case 3375:
case 1821:
case 3598:
case 3257:
case 1433:
case 3014:
case 1068:
case 1343:
case 2590:
case 1681:
case 620:
case 94:
case 2176:
case 3914:
case 1729:
case 3477:
case 323:
case 2291:
case 127:
case 1169:
case 1079:
case 1437:
case 3388:
case 240:
case 557:
case 1185:
case 2924:
case 3796:
case 2829:
case 87:
case 433:
case 712:
case 3183:
case 584:
case 1218:
case 554:
case 3264:
case 3194:
case 3473:
case 4059:
case 425:
case 145:
case 1949:
case 2689:
case 109:
case 1979:
case 1299:
case 972:
case 1494:
case 1631:
case 2361:
case 315:
case 3624:
case 1348:
case 1063:
case 242:
case 1438:
case 710:
case 1412:
case 1595:
case 1751:
case 1378:
case 2509:
case 1054:
case 1217:
case 3965:
case 2376:
case 3469:
case 49:
case 3137:
case 3485:
case 459:
case 2436:
case 2701:
case 3884:
case 4074:
case 1483:
case 2346:
case 2225:
case 3584:
case 2004:
case 3188:
case 3206:
case 1147:
case 4021:
case 1200:
case 929:
case 1213:
case 997:
case 1369:
case 2759:
case 3897:
case 1801:
case 4062:
case 1067:
case 2440:
case 413:
case 994:
case 3383:
case 3597:
case 3448:
case 2250:
case 3338:
case 2614:
case 3394:
case 1282:
case 341:
case 2851:
case 916:
case 1152:
case 3133:
case 2692:
case 2795:
case 907:
case 1457:
case 3233:
case 2305:
case 1399:
case 86:
case 926:
case 3704:
case 4092:
case 612:
case 1690:
case 3867:
case 1097:
case 435:
case 3001:
case 1235:
case 143:
case 2428:
case 4039:
case 3115:
case 1277:
case 3364:
case 2621:
case 919:
case 3353:
case 2662:
case 3106:
case 1464:
case 3959:
case 2125:
case 333:
case 3611:
case 2391:
case 983:
case 1093:
case 3372:
case 3237:
case 3854:
case 1889:
case 3095:
case 3554:
case 3432:
case 508:
case 1865:
case 2674:
case 3275:
case 1117:
case 676:
case 486:
case 3995:
case 546:
case 1629:
case 456:
case 318:
case 1243:
case 3245:
case 325:
case 1781:
case 1273:
case 3059:
case 1199:
case 3879:
case 4089:
case 428:
case 2911:
case 3212:
case 1760:
case 2659:
case 2350:
case 415:
case 1382:
case 2695:
case 3315:
case 1118:
case 3358:
case 3074:
case 2230:
case 359:
case 2531:
case 3153:
case 3741:
case 39:
case 117:
case 1269:
case 939:
case 2246:
case 2325:
case 1415:
case 1592:
case 3413:
case 3142:
case 3724:
case 2996:
case 610:
case 3021:
case 1098:
case 3400:
case 3568:
case 2427:
case 2560:
case 3157:
case 2096:
case 2601:
case 1317:
case 1278:
case 2222:
case 121:
case 503:
case 669:
case 3126:
case 1120:
case 1248:
case 2136:
case 2719:
case 324:
case 1264:
case 3218:
case 519:
case 2931:
case 38:
case 3169:
case 3232:
case 35:
case 1253:
case 3437:
case 1796:
case 2798:
case 1112:
case 1333:
case 156:
case 526:
case 3979:
case 2511:
case 3352:
case 3475:
case 2734:
case 1194:
case 4084:
case 345:
case 2203:
case 3949:
case 3574:
case 1138:
case 876:
case 3445:
case 2654:
case 1711:
case 2960:
case 1452:
case 1375:
case 1834:
case 3433:
case 3521:
case 77:
case 2480:
case 3068:
case 3343:
case 135:
case 66:
case 1226:
case 3862:
case 1345:
case 1187:
case 1939:
case 311:
case 1092:
case 3373:
case 3729:
case 1039:
case 1477:
case 443:
case 1272:
case 2228:
case 434:
case 1519:
case 1992:
case 3488:
case 1337:
case 2060:
case 2596:
case 3681:
case 1242:
case 908:
case 3968:
case 2667:
case 437:
case 1897:
case 2784:
case 3177:
case 1666:
case 2336:
case 810:
case 3067:
case 3501:
case 1258:
case 3200:
case 3385:
case 4034:
case 539:
case 3369:
case 91:
case 3709:
case 2422:
case 3152:
case 2208:
case 2227:
case 2186:
case 4019:
case 3135:
case 2256:
case 2461:
case 1338:
case 2793:
case 3487:
case 232:
case 3282:
case 2668:
case 2981:
case 421:
case 1065:
case 3751:
case 128:
case 832:
case 558:
case 1089:
case 3895:
case 3217:
case 3631:
case 981:
case 3348:
case 3063:
case 1624:
case 115:
case 3438:
case 1387:
case 1145:
case 993:
case 3859:
case 1884:
case 3483:
case 742:
case 3559:
case 3963:
case 1584:
case 2370:
case 210:
case 1137:
case 1989:
case 2604:
case 709:
case 823:
case 2183:
case 1719:
case 1136:
case 3529:
case 634:
case 573:
case 2264:
case 643:
case 2194:
case 1210:
case 3762:
case 112:
case 1654:
case 2138:
case 1203:
case 1811:
case 256:
case 3721:
case 3205:
case 1798:
case 1734:
case 78:
case 1511:
case 799:
case 2345:
case 2187:
case 2939:
case 2226:
case 2435:
case 235:
case 3774:
case 2092:
case 3071:
case 7:
case 2898:
case 2375:
case 2534:
case 3744:
case 176:
case 1480:
case 2598:
case 2257:
case 2834:
case 2447:
case 1060:
case 2337:
case 37:
case 3590:
case 130:
case 3066:
case 3941:
case 1667:
case 2914:
case 2242:
case 1170:
case 1896:
case 1402:
case 2039:
case 2819:
case 3146:
case 2519:
case 1207:
case 1228:
case 1140:
case 2272:
case 617:
case 1476:
case 3759:
case 2897:
case 2383:
case 2597:
case 3250:
case 2338:
case 1256:
case 241:
case 1981:
case 2394:
case 2641:
case 648:
case 2478:
case 578:
case 3795:
case 1208:
case 3180:
case 815:
case 169:
case 3361:
case 215:
case 2624:
case 3509:
case 4011:
case 1223:
case 110:
case 1797:
case 3701:
case 1430:
case 3225:
case 3436:
case 1679:
case 731:
case 1581:
case 2097:
case 2426:
case 1305:
case 686:
case 476:
case 3127:
case 3951:
case 656:
case 2442:
case 1789:
case 2113:
case 3051:
case 1662:
case 2100:
case 4060:
case 965:
case 2472:
case 1428:
case 3491:
case 2355:
case 3763:
case 234:
case 2997:
case 2318:
case 2277:
case 973:
case 2889:
case 843:
case 320:
case 2565:
case 2865:
case 2589:
case 623:
case 2093:
case 3328:
case 2984:
case 1403:
case 3804:
case 733:
case 412:
case 3767:
case 16:
case 567:
case 635:
case 3416:
case 2273:
case 564:
case 2629:
case 3103:
case 571:
case 3356:
case 322:
case 1350:
case 1739:
case 3110:
case 1116:
case 789:
case 821:
case 1105:
case 1659:
case 2760:
case 3684:
case 759:
case 248:
case 1911:
case 3308:
case 3327:
case 410:
case 1531:
case 2300:
case 1423:
case 3824:
case 2132:
case 1792:
case 2118:
case 1695:
case 3929:
case 2155:
case 1230:
case 2034:
case 2814:
case 2406:
case 3541:
case 814:
case 2098:
case 3128:
case 1191:
case 3107:
case 1325:
case 3871:
case 2919:
case 3571:
case 2415:
case 817:
case 221:
case 3749:
case 713:
case 1456:
case 2019:
case 848:
case 1096:
case 1560:
case 2934:
case 3779:
case 1222:
case 3866:
case 2317:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747731602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,];
var gg_b = "1747731602/";

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
