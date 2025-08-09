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
case 1388:
case 3430:
case 546:
case 1317:
case 2508:
case 1478:
case 3384:
case 1497:
case 3579:
case 2288:
case 1063:
case 3988:
case 3055:
case 2580:
case 2339:
case 458:
case 3123:
case 1326:
case 1300:
case 770:
case 3848:
case 753:
case 202:
case 3900:
case 2692:
case 3118:
case 1239:
case 1621:
case 3802:
case 2200:
case 1252:
case 420:
case 182:
case 2212:
case 1129:
case 2154:
case 3810:
case 297:
case 3435:
case 816:
case 327:
case 2044:
case 3233:
case 1312:
case 1492:
case 2933:
case 3182:
case 1305:
case 27:
case 591:
case 3093:
case 2697:
case 50:
case 2585:
case 219:
case 1257:
case 153:
case 3069:
case 3716:
case 2241:
case 170:
case 3905:
case 2863:
case 2357:
case 1646:
case 638:
case 3129:
case 382:
case 1912:
case 1881:
case 2158:
case 1435:
case 647:
case 1783:
case 1050:
case 1233:
case 1140:
case 237:
case 65:
case 768:
case 1093:
case 3305:
case 2957:
case 3341:
case 2674:
case 2630:
case 370:
case 1069:
case 531:
case 3646:
case 1467:
case 802:
case 1905:
case 2504:
case 3603:
case 2007:
case 1474:
case 2734:
case 477:
case 3099:
case 1384:
case 1722:
case 1579:
case 1815:
case 2893:
case 3063:
case 3984:
case 727:
case 525:
case 897:
case 1917:
case 2869:
case 2284:
case 1566:
case 2081:
case 2635:
case 973:
case 2010:
case 3300:
case 401:
case 3621:
case 2876:
case 87:
case 3239:
case 1118:
case 2850:
case 485:
case 1802:
case 2938:
case 3922:
case 2651:
case 3820:
case 3806:
case 2222:
case 1291:
case 1119:
case 3717:
case 743:
case 437:
case 2480:
case 1322:
case 448:
case 4002:
case 2165:
case 263:
case 83:
case 820:
case 2868:
case 2137:
case 592:
case 4015:
case 1578:
case 3479:
case 1597:
case 3077:
case 3530:
case 3098:
case 2673:
case 556:
case 3700:
case 3712:
case 3567:
case 3064:
case 714:
case 277:
case 143:
case 1275:
case 1642:
case 4007:
case 3927:
case 3186:
case 781:
case 678:
case 2733:
case 2831:
case 3604:
case 2160:
case 2503:
case 2894:
case 4010:
case 32:
case 1316:
case 4081:
case 29:
case 3843:
case 1680:
case 3741:
case 1124:
case 3128:
case 190:
case 2049:
case 3261:
case 609:
case 1064:
case 1983:
case 1712:
case 1825:
case 559:
case 343:
case 1604:
case 2679:
case 3383:
case 3592:
case 402:
case 3316:
case 130:
case 12:
case 2757:
case 3451:
case 3496:
case 1113:
case 258:
case 1741:
case 220:
case 23:
case 863:
case 657:
case 1535:
case 3680:
case 1916:
case 390:
case 1128:
case 2872:
case 1922:
case 3270:
case 3234:
case 2956:
case 2970:
case 3291:
case 3119:
case 1806:
case 1820:
case 940:
case 1788:
case 2153:
case 1717:
case 1466:
case 305:
case 877:
case 3784:
case 2025:
case 47:
case 2739:
case 3597:
case 1479:
case 801:
case 2509:
case 532:
case 1726:
case 730:
case 2752:
case 72:
case 3685:
case 1530:
case 3031:
case 89:
case 1077:
case 2637:
case 1800:
case 2852:
case 2839:
case 1902:
case 2173:
case 159:
case 662:
case 48:
case 2764:
case 875:
case 1:
case 2244:
case 942:
case 3315:
case 1888:
case 3749:
case 2969:
case 1817:
case 3495:
case 1536:
case 732:
case 2665:
case 1147:
case 2424:
case 2993:
case 2772:
case 52:
case 1554:
case 634:
case 2955:
case 2514:
case 3613:
case 7:
case 2399:
case 1805:
case 3255:
case 1743:
case 2857:
case 1111:
case 3453:
case 244:
case 1907:
case 2659:
case 1465:
case 1624:
case 764:
case 3490:
case 1142:
case 2777:
case 1437:
case 132:
case 951:
case 3310:
case 1052:
case 392:
case 1981:
case 1812:
case 3104:
case 2660:
case 505:
case 2695:
case 91:
case 1255:
case 979:
case 2518:
case 2587:
case 3841:
case 581:
case 1453:
case 3111:
case 4083:
case 1628:
case 3624:
case 813:
case 2999:
case 2355:
case 694:
case 3907:
case 3142:
case 1381:
case 1490:
case 2794:
case 3052:
case 1310:
case 3437:
case 332:
case 287:
case 3108:
case 1104:
case 3812:
case 421:
case 1686:
case 1250:
case 2202:
case 2671:
case 1033:
case 3826:
case 3460:
case 359:
case 2350:
case 1944:
case 3185:
case 435:
case 2486:
case 3948:
case 3:
case 2768:
case 2582:
case 2540:
case 3619:
case 2393:
case 1495:
case 822:
case 3888:
case 3720:
case 1293:
case 2369:
case 2215:
case 1558:
case 364:
case 3915:
case 756:
case 1532:
case 1454:
case 2750:
case 1702:
case 475:
case 1436:
case 88:
case 3458:
case 2027:
case 2368:
case 3623:
case 2524:
case 3889:
case 527:
case 1614:
case 3595:
case 895:
case 2964:
case 3744:
case 3306:
case 2769:
case 2016:
case 131:
case 952:
case 1560:
case 1103:
case 1822:
case 221:
case 2856:
case 30:
case 2793:
case 2972:
case 1906:
case 3645:
case 1349:
case 2834:
case 2870:
case 3601:
case 487:
case 1943:
case 965:
case 3682:
case 1816:
case 125:
case 645:
case 2755:
case 1537:
case 3571:
case 1146:
case 661:
case 3343:
case 939:
case 1056:
case 346:
case 2022:
case 866:
case 2977:
case 2998:
case 1231:
case 3325:
case 2654:
case 1925:
case 2875:
case 2331:
case 413:
case 999:
case 2861:
case 1682:
case 180:
case 2401:
case 3146:
case 2445:
case 3070:
case 3537:
case 626:
case 146:
case 1038:
case 3056:
case 1343:
case 2423:
case 3294:
case 821:
case 3827:
case 70:
case 4041:
case 1553:
case 3629:
case 2994:
case 1298:
case 1640:
case 3883:
case 2418:
case 2487:
case 3781:
case 3925:
case 2377:
case 2225:
case 2089:
case 3710:
case 3454:
case 746:
case 2364:
case 4088:
case 2135:
case 2968:
case 1889:
case 869:
case 2513:
case 3748:
case 3121:
case 1618:
case 3268:
case 200:
case 1949:
case 4000:
case 4026:
case 772:
case 2482:
case 1306:
case 3103:
case 3560:
case 2206:
case 2220:
case 3715:
case 1601:
case 3920:
case 854:
case 1868:
case 3190:
case 163:
case 1546:
case 3025:
case 3171:
case 3864:
case 1137:
case 82:
case 3739:
case 3509:
case 978:
case 701:
case 3752:
case 2685:
case 2031:
case 1673:
case 4069:
case 1696:
case 3991:
case 2234:
case 1938:
case 2291:
case 3934:
case 2119:
case 281:
case 777:
case 1370:
case 1334:
case 2849:
case 3153:
case 1411:
case 4076:
case 689:
case 4050:
case 2647:
case 1165:
case 3338:
case 2322:
case 1521:
case 3006:
case 101:
case 358:
case 3361:
case 3666:
case 2124:
case 320:
case 185:
case 763:
case 2611:
case 290:
case 3975:
case 243:
case 2327:
case 177:
case 3877:
case 1503:
case 1160:
case 3898:
case 1831:
case 1485:
case 1733:
case 633:
case 3679:
case 912:
case 1894:
case 2608:
case 230:
case 301:
case 1006:
case 2113:
case 1757:
case 2535:
case 3216:
case 2705:
case 3447:
case 1666:
case 960:
case 814:
case 1975:
case 2064:
case 805:
case 3485:
case 3160:
case 3503:
case 3375:
case 3442:
case 522:
case 1864:
case 3137:
case 1171:
case 890:
case 758:
case 1739:
case 2077:
case 2530:
case 2389:
case 3673:
case 2726:
case 1404:
case 1956:
case 3651:
case 3696:
case 2820:
case 2806:
case 66:
case 544:
case 1934:
case 2717:
case 2788:
case 2562:
case 3480:
case 3391:
case 843:
case 3165:
case 2466:
case 3081:
case 1339:
case 102:
case 430:
case 1352:
case 1511:
case 42:
case 2326:
case 3876:
case 2239:
case 3952:
case 719:
case 77:
case 1226:
case 998:
case 3850:
case 3939:
case 3504:
case 2317:
case 2603:
case 3007:
case 2388:
case 2099:
case 3756:
case 2478:
case 4064:
case 3893:
case 3409:
case 1508:
case 1446:
case 3667:
case 1288:
case 827:
case 316:
case 3869:
case 1697:
case 1678:
case 2305:
case 17:
case 1899:
case 868:
case 1403:
case 119:
case 3674:
case 2573:
case 270:
case 702:
case 2646:
case 1761:
case 500:
case 197:
case 1154:
case 3333:
case 282:
case 3048:
case 1547:
case 3158:
case 3775:
case 3002:
case 1421:
case 337:
case 2609:
case 1957:
case 3678:
case 3697:
case 1630:
case 3585:
case 1674:
case 319:
case 3899:
case 3403:
case 1855:
case 2069:
case 2716:
case 2905:
case 3357:
case 4094:
case 3212:
case 716:
case 3154:
case 2435:
case 2783:
case 3136:
case 3547:
case 3044:
case 628:
case 2140:
case 3933:
case 853:
case 938:
case 2566:
case 1010:
case 302:
case 490:
case 554:
case 2802:
case 3226:
case 3200:
case 443:
case 535:
case 4068:
case 1504:
case 1893:
case 1409:
case 748:
case 3738:
case 2384:
case 2815:
case 3288:
case 2101:
case 882:
case 3446:
case 2917:
case 2055:
case 116:
case 665:
case 1769:
case 1016:
case 2103:
case 249:
case 945:
case 1972:
case 366:
case 3206:
case 1793:
case 3220:
case 754:
case 3838:
case 641:
case 2822:
case 2715:
case 1870:
case 2349:
case 639:
case 537:
case 2454:
case 1429:
case 2532:
case 3364:
case 1368:
case 1027:
case 548:
case 1776:
case 2436:
case 846:
case 3135:
case 2748:
case 3440:
case 880:
case 1964:
case 769:
case 1083:
case 2294:
case 80:
case 1977:
case 3658:
case 1654:
case 2629:
case 2231:
case 3994:
case 891:
case 1875:
case 1519:
case 1394:
case 2781:
case 1331:
case 3130:
case 3174:
case 2816:
case 3243:
case 4033:
case 2146:
case 407:
case 696:
case 1022:
case 2091:
case 135:
case 1658:
case 3977:
case 1423:
case 2325:
case 766:
case 1162:
case 831:
case 1487:
case 4057:
case 1418:
case 502:
case 2640:
case 3519:
case 3875:
case 3414:
case 700:
case 1398:
case 1089:
case 272:
case 195:
case 1861:
case 1130:
case 636:
case 2109:
case 3178:
case 1243:
case 3197:
case 1799:
case 1401:
case 18:
case 2038:
case 246:
case 1482:
case 2306:
case 699:
case 3769:
case 3016:
case 4052:
case 3249:
case 1372:
case 4039:
case 2061:
case 321:
case 1838:
case 3891:
case 20:
case 3972:
case 166:
case 57:
case 926:
case 3834:
case 2601:
case 291:
case 1528:
case 3429:
case 3750:
case 3776:
case 3524:
case 2889:
case 1513:
case 2264:
case 2595:
case 795:
case 2744:
case 1440:
case 1041:
case 2619:
case 892:
case 934:
case 722:
case 2817:
case 1969:
case 3413:
case 1424:
case 2720:
case 3369:
case 2147:
case 558:
case 3215:
case 2459:
case 2915:
case 3653:
case 1772:
case 3428:
case 480:
case 2800:
case 2826:
case 3690:
case 2902:
case 2344:
case 1950:
case 651:
case 2460:
case 4038:
case 955:
case 446:
case 2185:
case 1012:
case 1173:
case 1244:
case 4061:
case 871:
case 1000:
case 2052:
case 2910:
case 3179:
case 387:
case 3281:
case 2108:
case 1660:
case 2981:
case 122:
case 642:
case 40:
case 3695:
case 1514:
case 1419:
case 2743:
case 375:
case 3518:
case 807:
case 3587:
case 2805:
case 713:
case 624:
case 1632:
case 1857:
case 676:
case 3999:
case 418:
case 3355:
case 449:
case 256:
case 3777:
case 864:
case 1545:
case 2310:
case 1833:
case 431:
case 1281:
case 563:
case 2104:
case 3017:
case 3955:
case 3514:
case 859:
case 1587:
case 175:
case 3857:
case 4075:
case 344:
case 910:
case 1207:
case 1355:
case 3659:
case 1999:
case 1166:
case 1523:
case 61:
case 3041:
case 2884:
case 2749:
case 3151:
case 3196:
case 679:
case 2495:
case 271:
case 2558:
case 3665:
case 2293:
case 3993:
case 3529:
case 832:
case 3637:
case 1671:
case 3852:
case 2033:
case 1202:
case 2250:
case 3976:
case 3839:
case 3950:
case 775:
case 3012:
case 1248:
case 4091:
case 3764:
case 4056:
case 1768:
case 1582:
case 207:
case 3244:
case 736:
case 4078:
case 3354:
case 1240:
case 845:
case 2804:
case 3229:
case 1698:
case 3085:
case 2593:
case 2258:
case 2724:
case 1420:
case 2382:
case 2576:
case 2550:
case 946:
case 365:
case 2643:
case 3544:
case 1282:
case 3795:
case 980:
case 3753:
case 515:
case 3851:
case 396:
case 1672:
case 1765:
case 504:
case 991:
case 4092:
case 1510:
case 2345:
case 695:
case 2066:
case 1581:
case 3042:
case 1287:
case 918:
case 2323:
case 799:
case 1664:
case 3214:
case 1223:
case 3790:
case 2079:
case 3008:
case 3873:
case 1004:
case 2477:
case 3771:
case 1851:
case 4035:
case 2188:
case 261:
case 635:
case 2945:
case 3510:
case 931:
case 1080:
case 1668:
case 3218:
case 1042:
case 183:
case 2918:
case 1214:
case 2987:
case 2563:
case 410:
case 1152:
case 1008:
case 739:
case 2494:
case 2431:
case 3737:
case 741:
case 2885:
case 3507:
case 2314:
case 1873:
case 1354:
case 2940:
case 2786:
case 494:
case 2329:
case 550:
case 752:
case 2842:
case 2468:
case 3358:
case 3240:
case 2073:
case 3677:
case 874:
case 3936:
case 1958:
case 826:
case 2236:
case 3515:
case 621:
case 3759:
case 4062:
case 2105:
case 139:
case 2051:
case 2713:
case 3548:
case 783:
case 1795:
case 2811:
case 2982:
case 834:
case 461:
case 1286:
case 992:
case 2386:
case 956:
case 445:
case 2729:
case 3021:
case 351:
case 2809:
case 1415:
case 3878:
case 1874:
case 2313:
case 1959:
case 1161:
case 3699:
case 11:
case 2295:
case 3332:
case 2564:
case 2328:
case 3663:
case 1407:
case 324:
case 1693:
case 708:
case 3953:
case 2615:
case 1525:
case 3046:
case 862:
case 1353:
case 3134:
case 3156:
case 4073:
case 3365:
case 1835:
case 4051:
case 1481:
case 1390:
case 1371:
case 2648:
case 907:
case 1410:
case 429:
case 3971:
case 1650:
case 3990:
case 751:
case 2745:
case 3009:
case 1953:
case 2319:
case 176:
case 2265:
case 964:
case 2594:
case 3867:
case 3353:
case 234:
case 3669:
case 2122:
case 1156:
case 1191:
case 2787:
case 959:
case 9:
case 3410:
case 622:
case 142:
case 810:
case 2821:
case 1971:
case 3286:
case 1549:
case 3862:
case 262:
case 426:
case 2260:
case 3960:
case 2986:
case 2127:
case 474:
case 593:
case 1360:
case 3754:
case 724:
case 3506:
case 894:
case 1878:
case 1897:
case 3415:
case 2928:
case 2232:
case 3959:
case 3830:
case 31:
case 1995:
case 2324:
case 1359:
case 3213:
case 2846:
case 1663:
case 379:
case 1332:
case 2746:
case 498:
case 3199:
case 3211:
case 2266:
case 576:
case 1001:
case 3526:
case 3500:
case 92:
case 3774:
case 1778:
case 4060:
case 2438:
case 1797:
case 1155:
case 16:
case 2279:
case 1858:
case 3208:
case 2908:
case 1204:
case 786:
case 3979:
case 2110:
case 542:
case 1018:
case 3242:
case 1379:
case 1584:
case 484:
case 3762:
case 3588:
case 3517:
case 2304:
case 3014:
case 2942:
case 76:
case 2148:
case 3285:
case 1792:
case 2721:
case 1973:
case 2823:
case 1150:
case 4065:
case 3505:
case 3541:
case 1040:
case 1176:
case 2818:
case 63:
case 140:
case 620:
case 1082:
case 4037:
case 3416:
case 3767:
case 3351:
case 3656:
case 1638:
case 3691:
case 186:
case 1169:
case 812:
case 2533:
case 3634:
case 278:
case 1285:
case 2557:
case 2054:
case 2036:
case 508:
case 3973:
case 2144:
case 1427:
case 393:
case 3150:
case 2385:
case 3176:
case 677:
case 223:
case 2475:
case 789:
case 1416:
case 685:
case 4071:
case 1247:
case 340:
case 914:
case 1351:
case 1767:
case 209:
case 3169:
case 601:
case 2622:
case 3638:
case 1656:
case 1691:
case 2296:
case 2251:
case 69:
case 981:
case 1966:
case 1211:
case 3661:
case 990:
case 1730:
case 733:
case 447:
case 1500:
case 1163:
case 1526:
case 3001:
case 2311:
case 2552:
case 2709:
case 3366:
case 3797:
case 2539:
case 2380:
case 3778:
case 2456:
case 2904:
case 84:
case 3858:
case 1979:
case 212:
case 3379:
case 2683:
case 1588:
case 3246:
case 2813:
case 4036:
case 2711:
case 750:
case 616:
case 2309:
case 552:
case 3766:
case 3397:
case 1484:
case 2946:
case 478:
case 2053:
case 304:
case 1978:
case 2274:
case 423:
case 2143:
case 3974:
case 2090:
case 3779:
case 3522:
case 2125:
case 3426:
case 1362:
case 2071:
case 2742:
case 583:
case 2886:
case 3131:
case 1871:
case 1164:
case 2921:
case 128:
case 3639:
case 637:
case 968:
case 25:
case 1890:
case 3935:
case 2561:
case 1086:
case 3412:
case 150:
case 3516:
case 2235:
case 2106:
case 2684:
case 3967:
case 767:
case 565:
case 1013:
case 1172:
case 2903:
case 3865:
case 1796:
case 3203:
case 1751:
case 1028:
case 1853:
case 1367:
case 3773:
case 715:
case 2626:
case 3871:
case 1652:
case 460:
case 3890:
case 1639:
case 2292:
case 1221:
case 1412:
case 406:
case 1935:
case 697:
case 1516:
case 1392:
case 2321:
case 211:
case 1583:
case 2575:
case 1441:
case 599:
case 3172:
case 2303:
case 2617:
case 2688:
case 1865:
case 1527:
case 3367:
case 2032:
case 1203:
case 536:
case 838:
case 3895:
case 4058:
case 970:
case 3589:
case 3330:
case 3374:
case 1378:
case 1397:
case 1019:
case 2641:
case 1766:
case 2605:
case 3997:
case 3978:
case 2909:
case 104:
case 2824:
case 2278:
case 1859:
case 1974:
case 2297:
case 115:
case 1779:
case 2439:
case 3633:
case 3362:
case 457:
case 1400:
case 2452:
case 1962:
case 367:
case 982:
case 1194:
case 1131:
case 3177:
case 44:
case 3259:
case 3116:
case 2415:
case 110:
case 2932:
case 2228:
case 2395:
case 3232:
case 2161:
case 2830:
case 1313:
case 4042:
case 21:
case 3568:
case 3913:
case 509:
case 4008:
case 2213:
case 842:
case 3846:
case 975:
case 1295:
case 1610:
case 2448:
case 987:
case 3260:
case 2960:
case 496:
case 1681:
case 1035:
case 3986:
case 1729:
case 4080:
case 208:
case 1386:
case 1450:
case 1476:
case 578:
case 4011:
case 876:
case 2520:
case 452:
case 2390:
case 439:
case 2543:
case 3718:
case 355:
case 2410:
case 1648:
case 2676:
case 3821:
case 1290:
case 512:
case 710:
case 1271:
case 188:
case 1189:
case 2650:
case 1598:
case 3531:
case 1074:
case 3499:
case 2965:
case 1577:
case 3803:
case 1253:
case 3701:
case 2407:
case 194:
case 3319:
case 3097:
case 3594:
case 2353:
case 2867:
case 2525:
case 1455:
case 2138:
case 1718:
case 155:
case 3648:
case 1723:
case 1821:
case 2892:
case 388:
case 2990:
case 3271:
case 632:
case 506:
case 1745:
case 808:
case 1701:
case 1803:
case 3598:
case 3030:
case 1531:
case 1078:
case 1097:
case 1319:
case 2953:
case 3615:
case 394:
case 1463:
case 2170:
case 2219:
case 3493:
case 2224:
case 3809:
case 1259:
case 3607:
case 2003:
case 54:
case 1232:
case 4004:
case 2359:
case 1782:
case 1568:
case 2995:
case 3067:
case 3564:
case 557:
case 755:
case 1260:
case 162:
case 2549:
case 734:
case 1740:
case 6:
case 3035:
case 3681:
case 2360:
case 3729:
case 3572:
case 1092:
case 2175:
case 251:
case 584:
case 1576:
case 2759:
case 60:
case 1724:
case 442:
case 1472:
case 2502:
case 1550:
case 98:
case 691:
case 3880:
case 2548:
case 2133:
case 3786:
case 1464:
case 2760:
case 1625:
case 303:
case 1569:
case 3468:
case 424:
case 2358:
case 2240:
case 3112:
case 2677:
case 1804:
case 2936:
case 896:
case 1258:
case 2879:
case 2515:
case 1340:
case 1929:
case 4046:
case 865:
case 2287:
case 1323:
case 4003:
case 2664:
case 1079:
case 841:
case 3494:
case 1498:
case 3923:
case 1477:
case 3599:
case 839:
case 966:
case 174:
case 2245:
case 2201:
case 361:
case 3945:
case 1606:
case 646:
case 1301:
case 900:
case 4021:
case 3847:
case 236:
case 2581:
case 1719:
case 1066:
case 345:
case 899:
case 2139:
case 3555:
case 3914:
case 3323:
case 2668:
case 2152:
case 1100:
case 2214:
case 3387:
case 479:
case 3318:
case 1885:
case 2873:
case 1599:
case 3477:
case 3498:
case 1431:
case 1923:
case 1188:
case 817:
case 3606:
case 1945:
case 3184:
case 252:
case 3345:
case 2011:
case 145:
case 1096:
case 3550:
case 239:
case 969:
case 1811:
case 1713:
case 2449:
case 3625:
case 1329:
case 745:
case 547:
case 1842:
case 2958:
case 1254:
case 761:
case 3804:
case 2229:
case 2631:
case 2085:
case 2694:
case 954:
case 1808:
case 1236:
case 1708:
case 3439:
case 3556:
case 3591:
case 668:
case 3570:
case 3534:
case 1071:
case 2362:
case 3704:
case 1125:
case 3452:
case 937:
case 1742:
case 2198:
case 1886:
case 2895:
case 433:
case 747:
case 2330:
case 2374:
case 738:
case 1780:
case 2484:
case 1309:
case 3605:
case 2978:
case 3909:
case 75:
case 1828:
case 3297:
case 311:
case 3575:
case 3819:
case 1684:
case 1106:
case 2013:
case 2172:
case 3303:
case 3617:
case 1095:
case 1903:
case 3059:
case 4014:
case 3032:
case 2853:
case 2028:
case 3457:
case 2796:
case 1785:
case 804:
case 2992:
case 2164:
case 3626:
case 2871:
case 815:
case 15:
case 489:
case 3292:
case 398:
case 2086:
case 503:
case 3060:
case 1561:
case 138:
case 273:
case 867:
case 2405:
case 3106:
case 2583:
case 1819:
case 3684:
case 653:
case 2967:
case 1688:
case 3267:
case 2527:
case 1059:
case 2203:
case 4087:
case 1149:
case 1032:
case 2652:
case 2837:
case 1626:
case 3921:
case 3433:
case 2221:
case 2639:
case 35:
case 1060:
case 46:
case 2412:
case 682:
case 902:
case 4045:
case 1321:
case 2516:
case 3235:
case 347:
case 3538:
case 1591:
case 3090:
case 1439:
case 3708:
case 1704:
case 2426:
case 4082:
case 2194:
case 3886:
case 711:
case 2860:
case 486:
case 2131:
case 2488:
case 2417:
case 873:
case 3946:
case 2378:
case 828:
case 2832:
case 1909:
case 3828:
case 526:
case 204:
case 3274:
case 798:
case 3230:
case 1065:
case 215:
case 493:
case 3143:
case 2974:
case 1824:
case 3904:
case 3342:
case 1181:
case 1279:
case 3627:
case 1110:
case 74:
case 3829:
case 2087:
case 3683:
case 1840:
case 2584:
case 2018:
case 757:
case 2489:
case 4024:
case 1107:
case 1980:
case 3616:
case 160:
case 1911:
case 1266:
case 3470:
case 3552:
case 3709:
case 2366:
case 958:
case 106:
case 2155:
case 3491:
case 2082:
case 1115:
case 240:
case 62:
case 630:
case 2169:
case 2951:
case 286:
case 2638:
case 1703:
case 3296:
case 706:
case 1148:
case 3273:
case 1058:
case 1823:
case 1721:
case 3144:
case 2792:
case 760:
case 415:
case 3814:
case 2150:
case 562:
case 1887:
case 109:
case 2767:
case 3947:
case 2512:
case 2656:
case 712:
case 34:
case 1347:
case 3703:
case 3801:
case 3845:
case 2670:
case 2634:
case 1273:
case 2029:
case 233:
case 3721:
case 1144:
case 1036:
case 3058:
case 3689:
case 2373:
case 3887:
case 2505:
case 2541:
case 2483:
case 1475:
case 123:
case 643:
case 3279:
case 2836:
case 4013:
case 3181:
case 1342:
case 2208:
case 1904:
case 112:
case 2242:
case 2675:
case 709:
case 2588:
case 2762:
case 2517:
case 3304:
case 3942:
case 3107:
case 3980:
case 614:
case 3746:
case 2211:
case 289:
case 985:
case 3266:
case 3882:
case 605:
case 360:
case 428:
case 1616:
case 2280:
case 1552:
case 2526:
case 594:
case 473:
case 901:
case 1456:
case 1491:
case 681:
case 2422:
case 306:
case 1380:
case 1709:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754697601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,];
var gg_b = "1754697601/";

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
