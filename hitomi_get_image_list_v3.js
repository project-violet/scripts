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
case 3152:
case 679:
case 1720:
case 3496:
case 2836:
case 3813:
case 2355:
case 2701:
case 3888:
case 13:
case 4064:
case 2550:
case 2995:
case 3729:
case 3774:
case 2835:
case 2356:
case 1925:
case 655:
case 2805:
case 3299:
case 3495:
case 3142:
case 3642:
case 2107:
case 2607:
case 736:
case 3462:
case 337:
case 2678:
case 2345:
case 2137:
case 3814:
case 1515:
case 2580:
case 3319:
case 3827:
case 1366:
case 803:
case 2385:
case 2322:
case 411:
case 800:
case 3065:
case 1038:
case 3848:
case 2872:
case 3773:
case 1407:
case 658:
case 847:
case 1365:
case 3626:
case 1437:
case 3377:
case 698:
case 902:
case 3671:
case 966:
case 2659:
case 3480:
case 944:
case 3969:
case 1861:
case 2266:
case 1285:
case 1960:
case 381:
case 1766:
case 2785:
case 1222:
case 1433:
case 2604:
case 621:
case 2634:
case 3738:
case 1765:
case 3777:
case 2469:
case 1915:
case 2649:
case 3708:
case 2149:
case 945:
case 1286:
case 449:
case 462:
case 412:
case 639:
case 1320:
case 3115:
case 1459:
case 1074:
case 3329:
case 22:
case 2689:
case 2189:
case 3824:
case 540:
case 1582:
case 3660:
case 3879:
case 2950:
case 2133:
case 3616:
case 948:
case 1404:
case 2595:
case 2562:
case 53:
case 1669:
case 776:
case 1870:
case 1169:
case 1526:
case 1462:
case 10:
case 3290:
case 2426:
case 340:
case 1774:
case 1495:
case 3982:
case 706:
case 2229:
case 33:
case 2425:
case 577:
case 762:
case 712:
case 2482:
case 2045:
case 3201:
case 3212:
case 2056:
case 3571:
case 2162:
case 2442:
case 1010:
case 2897:
case 2085:
case 3437:
case 1569:
case 1338:
case 3478:
case 3365:
case 3560:
case 2273:
case 749:
case 3516:
case 2533:
case 3392:
case 2503:
case 424:
case 1773:
case 972:
case 884:
case 1125:
case 84:
case 1065:
case 2086:
case 885:
case 2196:
case 452:
case 2452:
case 1827:
case 1319:
case 3515:
case 2937:
case 3542:
case 492:
case 2507:
case 873:
case 2277:
case 3915:
case 2238:
case 2416:
case 932:
case 2989:
case 2460:
case 615:
case 665:
case 2893:
case 3792:
case 4076:
case 3285:
case 2650:
case 2150:
case 1823:
case 3916:
case 3861:
case 2903:
case 646:
case 3766:
case 664:
case 761:
case 1719:
case 3073:
case 1969:
case 2415:
case 1480:
case 971:
case 3029:
case 3971:
case 177:
case 250:
case 996:
case 3449:
case 3669:
case 3169:
case 1116:
case 2894:
case 1616:
case 2012:
case 1440:
case 1160:
case 1374:
case 3434:
case 436:
case 3525:
case 2090:
case 1817:
case 1329:
case 2904:
case 1824:
case 3074:
case 3459:
case 3320:
case 3581:
case 319:
case 369:
case 2243:
case 1878:
case 2764:
case 1807:
case 3057:
case 2398:
case 887:
case 4031:
case 578:
case 3028:
case 1605:
case 4012:
case 1135:
case 4001:
case 308:
case 3972:
case 973:
case 4090:
case 1784:
case 526:
case 1328:
case 2253:
case 2032:
case 1753:
case 3414:
case 1997:
case 1606:
case 2002:
case 1106:
case 2988:
case 1744:
case 3906:
case 3197:
case 2244:
case 3862:
case 183:
case 3087:
case 3895:
case 2209:
case 2239:
case 1594:
case 1709:
case 760:
case 65:
case 1783:
case 559:
case 2524:
case 1718:
case 3541:
case 2283:
case 1968:
case 3488:
case 3791:
case 199:
case 1754:
case 4022:
case 535:
case 1849:
case 2363:
case 1344:
case 3300:
case 3505:
case 856:
case 3193:
case 1834:
case 1309:
case 2924:
case 174:
case 3941:
case 3054:
case 3479:
case 988:
case 2451:
case 2917:
case 1267:
case 831:
case 4086:
case 175:
case 3417:
case 583:
case 1000:
case 2979:
case 1318:
case 69:
case 3850:
case 3276:
case 2588:
case 2513:
case 252:
case 3391:
case 2670:
case 489:
case 2481:
case 2364:
case 94:
case 1298:
case 4046:
case 1747:
case 126:
case 3053:
case 3202:
case 2548:
case 276:
case 3211:
case 538:
case 1651:
case 341:
case 1757:
case 1384:
case 4045:
case 3043:
case 1993:
case 1461:
case 2257:
case 2558:
case 1641:
case 1889:
case 178:
case 2527:
case 872:
case 3880:
case 228:
case 1728:
case 617:
case 2688:
case 2188:
case 206:
case 3328:
case 212:
case 3106:
case 1047:
case 793:
case 1972:
case 2561:
case 1458:
case 42:
case 790:
case 88:
case 3605:
case 816:
case 3105:
case 2332:
case 3593:
case 1028:
case 2311:
case 108:
case 1448:
case 3635:
case 802:
case 2302:
case 1168:
case 1581:
case 3878:
case 1057:
case 1791:
case 2627:
case 1488:
case 2376:
case 1413:
case 3387:
case 142:
case 2291:
case 623:
case 2614:
case 657:
case 2067:
case 335:
case 3968:
case 1935:
case 2825:
case 3672:
case 1895:
case 1087:
case 334:
case 2648:
case 3709:
case 2375:
case 3594:
case 1551:
case 1936:
case 1862:
case 383:
case 1197:
case 2721:
case 1730:
case 1906:
case 2871:
case 1009:
case 3354:
case 1391:
case 2776:
case 3030:
case 211:
case 261:
case 2:
case 2623:
case 1850:
case 3318:
case 3000:
case 3994:
case 1951:
case 1044:
case 3309:
case 504:
case 2775:
case 1693:
case 1193:
case 1505:
case 3834:
case 2494:
case 3267:
case 1535:
case 3339:
case 1941:
case 374:
case 410:
case 359:
case 801:
case 3681:
case 1300:
case 3344:
case 413:
case 463:
case 1018:
case 2815:
case 3353:
case 508:
case 3728:
case 3384:
case 519:
case 569:
case 141:
case 3757:
case 3141:
case 3641:
case 3889:
case 2064:
case 3461:
case 2617:
case 753:
case 2711:
case 727:
case 3747:
case 2702:
case 2816:
case 2961:
case 1211:
case 2679:
case 750:
case 2860:
case 2179:
case 1202:
case 900:
case 903:
case 1398:
case 3842:
case 1914:
case 2743:
case 2837:
case 1764:
case 2878:
case 3311:
case 528:
case 740:
case 1958:
case 2105:
case 2593:
case 1472:
case 136:
case 895:
case 743:
case 2784:
case 3561:
case 923:
case 894:
case 151:
case 2106:
case 362:
case 1002:
case 238:
case 3688:
case 3613:
case 2636:
case 1253:
case 2328:
case 898:
case 1763:
case 3721:
case 192:
case 2744:
case 3570:
case 1913:
case 525:
case 1579:
case 2709:
case 3648:
case 1239:
case 2672:
case 2172:
case 2739:
case 1218:
case 2968:
case 1517:
case 3158:
case 3825:
case 1283:
case 481:
case 2718:
case 821:
case 2783:
case 3291:
case 3114:
case 3067:
case 1436:
case 91:
case 2681:
case 1363:
case 2181:
case 259:
case 2470:
case 3321:
case 1917:
case 2568:
case 1451:
case 2804:
case 2091:
case 2309:
case 600:
case 3623:
case 1979:
case 592:
case 1661:
case 2994:
case 2030:
case 361:
case 311:
case 3:
case 4092:
case 3776:
case 152:
case 3871:
case 2298:
case 879:
case 1798:
case 2343:
case 1869:
case 2651:
case 2833:
case 2151:
case 3732:
case 176:
case 3961:
case 1247:
case 3860:
case 3679:
case 1923:
case 226:
case 2747:
case 2803:
case 2641:
case 2141:
case 2461:
case 2993:
case 855:
case 2757:
case 3624:
case 3124:
case 77:
case 822:
case 482:
case 2728:
case 1514:
case 818:
case 2047:
case 2414:
case 3253:
case 4074:
case 1188:
case 3523:
case 3948:
case 1561:
case 782:
case 2972:
case 47:
case 351:
case 3284:
case 2168:
case 1302:
case 3958:
case 2448:
case 208:
case 2028:
case 3472:
case 4029:
case 1842:
case 3914:
case 2057:
case 3398:
case 269:
case 3243:
case 3927:
case 1614:
case 1114:
case 3436:
case 2413:
case 1127:
case 204:
case 2541:
case 2935:
case 1158:
case 2905:
case 865:
case 3524:
case 1375:
case 1148:
case 1648:
case 814:
case 3209:
case 2087:
case 3405:
case 846:
case 3076:
case 2730:
case 1721:
case 2697:
case 3763:
case 2862:
case 3244:
case 1230:
case 2221:
case 149:
case 1570:
case 5:
case 2936:
case 3913:
case 2700:
case 561:
case 2506:
case 2276:
case 3588:
case 2009:
case 3287:
case 1871:
case 3513:
case 2536:
case 967:
case 2951:
case 917:
case 3161:
case 4008:
case 1123:
case 1623:
case 1:
case 684:
case 2424:
case 161:
case 549:
case 3021:
case 64:
case 2941:
case 2479:
case 3917:
case 2840:
case 1494:
case 2193:
case 685:
case 3767:
case 4019:
case 3924:
case 2083:
case 2300:
case 2330:
case 3363:
case 328:
case 99:
case 2981:
case 1815:
case 1117:
case 3257:
case 1064:
case 407:
case 1124:
case 241:
case 2043:
case 2202:
case 3923:
case 3247:
case 777:
case 1860:
case 3548:
case 1179:
case 1679:
case 2211:
case 1961:
case 2694:
case 1816:
case 1702:
case 1493:
case 2572:
case 391:
case 506:
case 443:
case 2084:
case 3869:
case 3798:
case 3481:
case 390:
case 1701:
case 2231:
case 3559:
case 1220:
case 1836:
case 1731:
case 2720:
case 738:
case 441:
case 3045:
case 3482:
case 1550:
case 3229:
case 3425:
case 23:
case 3534:
case 1805:
case 3274:
case 2925:
case 3799:
case 1540:
case 1835:
case 1637:
case 4084:
case 1345:
case 389:
case 817:
case 867:
case 1107:
case 3046:
case 1996:
case 4009:
case 2515:
case 3937:
case 3696:
case 2942:
case 3907:
case 2038:
case 656:
case 2008:
case 3589:
case 799:
case 2366:
case 3695:
case 3503:
case 3195:
case 2019:
case 3273:
case 2560:
case 89:
case 780:
case 3533:
case 2516:
case 2437:
case 1386:
case 2478:
case 3022:
case 734:
case 3162:
case 3085:
case 4083:
case 3897:
case 3442:
case 775:
case 1159:
case 3415:
case 1659:
case 2073:
case 560:
case 2766:
case 2960:
case 85:
case 1722:
case 3650:
case 2916:
case 3933:
case 513:
case 563:
case 2861:
case 1134:
case 1634:
case 2792:
case 2403:
case 968:
case 1104:
case 918:
case 3140:
case 2433:
case 3989:
case 3460:
case 2286:
case 1149:
case 3277:
case 1881:
case 1980:
case 1265:
case 1469:
case 3537:
case 2542:
case 1786:
case 3507:
case 2765:
case 914:
case 3180:
case 1099:
case 3471:
case 1755:
case 1301:
case 4047:
case 1312:
case 1746:
case 3934:
case 2525:
case 778:
case 1841:
case 1940:
case 3399:
case 1756:
case 2434:
case 1595:
case 2256:
case 3894:
case 1950:
case 408:
case 3001:
case 419:
case 2245:
case 2526:
case 2449:
case 3959:
case 1390:
case 4057:
case 353:
case 1562:
case 1426:
case 1549:
case 3678:
case 708:
case 189:
case 3790:
case 3345:
case 3637:
case 3137:
case 1046:
case 2642:
case 3107:
case 20:
case 237:
case 1055:
case 886:
case 1504:
case 3835:
case 1868:
case 1799:
case 769:
case 3995:
case 86:
case 3550:
case 3346:
case 3836:
case 3220:
case 2888:
case 478:
case 3701:
case 1056:
case 2652:
case 2152:
case 3731:
case 193:
case 3962:
case 282:
case 2126:
case 360:
case 2338:
case 1897:
case 1442:
case 313:
case 2066:
case 1195:
case 1503:
case 922:
case 1533:
case 1273:
case 2848:
case 474:
case 4091:
case 2682:
case 2065:
case 2625:
case 2125:
case 4000:
case 2858:
case 3580:
case 2319:
case 601:
case 2827:
case 1907:
case 2092:
case 3469:
case 1537:
case 3980:
case 3265:
case 3149:
case 480:
case 2708:
case 3649:
case 648:
case 2777:
case 823:
case 1893:
case 3634:
case 434:
case 3292:
case 1989:
case 1416:
case 3104:
case 3604:
case 1903:
case 1933:
case 1650:
case 3210:
case 3722:
case 995:
case 3159:
case 2480:
case 3659:
case 1959:
case 921:
case 3562:
case 3390:
case 3603:
case 3103:
case 3595:
case 645:
case 3756:
case 2879:
case 1001:
case 2660:
case 68:
case 2440:
case 3633:
case 1012:
case 2616:
case 3851:
case 2116:
case 1894:
case 2824:
case 616:
case 589:
case 2329:
case 1904:
case 3940:
case 602:
case 32:
case 1949:
case 2115:
case 3312:
case 438:
case 3755:
case 3797:
case 3630:
case 3953:
case 565:
case 1381:
case 515:
case 447:
case 1144:
case 3600:
case 3100:
case 2532:
case 1609:
case 1109:
case 770:
case 1139:
case 773:
case 2502:
case 8:
case 811:
case 400:
case 2484:
case 1183:
case 1683:
case 1618:
case 3258:
case 403:
case 2453:
case 546:
case 564:
case 3528:
case 514:
case 1654:
case 3691:
case 3191:
case 358:
case 1154:
case 3421:
case 2024:
case 2664:
case 2164:
case 1991:
case 2017:
case 682:
case 1735:
case 2205:
case 3899:
case 2235:
case 1705:
case 3394:
case 1351:
case 518:
case 4078:
case 1684:
case 1184:
case 4037:
case 960:
case 2483:
case 3213:
case 1153:
case 1653:
case 1706:
case 2921:
case 1930:
case 3587:
case 1900:
case 1094:
case 3051:
case 3944:
case 60:
case 322:
case 2454:
case 1270:
case 2976:
case 1845:
case 1500:
case 4089:
case 2088:
case 3794:
case 395:
case 216:
case 1147:
case 3279:
case 3006:
case 3475:
case 1467:
case 3224:
case 245:
case 109:
case 1741:
case 1157:
case 3217:
case 3518:
case 28:
case 2241:
case 1846:
case 1128:
case 1628:
case 3005:
case 806:
case 4003:
case 3476:
case 1855:
case 3554:
case 1068:
case 812:
case 1306:
case 3035:
case 862:
case 2865:
case 1886:
case 3397:
case 2027:
case 114:
case 1372:
case 2447:
case 2014:
case 3793:
case 2167:
case 2667:
case 3411:
case 321:
case 165:
case 3584:
case 4049:
case 2457:
case 2911:
case 1261:
case 3223:
case 3947:
case 2810:
case 1885:
case 4034:
case 2428:
case 1687:
case 2048:
case 248:
case 785:
case 1528:
case 2714:
case 1943:
case 3093:
case 3654:
case 158:
case 1191:
case 852:
case 485:
case 989:
case 1081:
case 825:
case 44:
case 1258:
case 4062:
case 3118:
case 3183:
case 3683:
case 598:
case 2748:
case 484:
case 990:
case 1984:
case 1393:
case 993:
case 2873:
case 1547:
case 3639:
case 3139:
case 430:
case 1953:
case 2621:
case 1630:
case 1130:
case 2121:
case 1797:
case 1600:
case 3644:
case 3144:
case 2297:
case 2598:
case 3464:
case 1587:
case 1288:
case 272:
case 3153:
case 2963:
case 640:
case 1213:
case 595:
case 643:
case 3812:
case 2713:
case 539:
case 1909:
case 2324:
case 3341:
case 1939:
case 891:
case 1899:
case 1768:
case 3735:
case 2874:
case 3351:
case 1918:
case 2268:
case 2567:
case 607:
case 3463:
case 3143:
case 3643:
case 229:
case 2400:
case 3890:
case 1041:
case 179:
case 3855:
case 2388:
case 2313:
case 1005:
case 1476:
case 3128:
case 554:
case 3306:
case 3068:
case 3591:
case 194:
case 579:
case 3157:
case 4080:
case 2132:
case 836:
case 1036:
case 2632:
case 195:
case 67:
case 2779:
case 1509:
case 2611:
case 3856:
case 3467:
case 2602:
case 1006:
case 3147:
case 1368:
case 1279:
case 522:
case 3647:
case 3270:
case 1544:
case 1553:
case 2676:
case 2176:
case 3822:
case 365:
case 315:
case 1584:
case 296:
case 121:
case 1947:
case 3097:
case 2358:
case 1223:
case 271:
case 346:
case 3372:
case 364:
case 2293:
case 747:
case 1411:
case 1793:
case 2175:
case 558:
case 3886:
case 2877:
case 1543:
case 2838:
case 2564:
case 198:
case 2808:
case 1397:
case 1412:
case 1401:
case 2854:
case 1431:
case 936:
case 2359:
case 3725:
case 496:
case 3173:
case 3673:
case 2304:
case 1929:
case 597:
case 2809:
case 3499:
case 270:
case 3726:
case 157:
case 123:
case 642:
case 3821:
case 120:
case 1863:
case 2349:
case 273:
case 432:
case 1016:
case 2601:
case 2631:
case 586:
case 3315:
case 3129:
case 3629:
case 1973:
case 3510:
case 992:
case 3566:
case 3316:
case 2080:
case 3674:
case 3174:
case 487:
case 1207:
case 1864:
case 853:
case 1278:
case 1538:
case 850:
case 1908:
case 288:
case 893:
case 745:
case 2655:
case 1938:
case 924:
case 2155:
case 78:
case 3965:
case 890:
case 11:
case 2410:
case 1042:
case 2146:
case 1485:
case 1289:
case 1422:
case 2789:
case 3802:
case 1573:
case 2492:
case 2656:
case 1052:
case 3966:
case 1233:
case 3832:
case 186:
case 3716:
case 1769:
case 716:
case 766:
case 2307:
case 1898:
case 744:
case 2465:
case 2269:
case 2645:
case 1486:
case 976:
case 3876:
case 1259:
case 3520:
case 1666:
case 2062:
case 24:
case 523:
case 1446:
case 1529:
case 748:
case 2734:
case 1692:
case 2096:
case 1192:
case 3240:
case 1867:
case 2704:
case 1574:
case 4061:
case 1025:
case 2749:
case 3608:
case 3108:
case 1445:
case 3177:
case 3677:
case 4058:
case 756:
case 1920:
case 320:
case 2545:
case 1173:
case 2340:
case 962:
case 1499:
case 1295:
case 2474:
case 2059:
case 15:
case 2225:
case 1782:
case 2546:
case 3974:
case 2049:
case 731:
case 683:
case 2891:
case 448:
case 1296:
case 2004:
case 3412:
case 680:
case 3431:
case 1371:
case 3864:
case 2242:
case 3207:
case 3508:
case 2089:
case 1565:
case 3237:
case 3538:
case 2586:
case 3577:
case 3369:
case 729:
case 2473:
case 402:
case 1316:
case 1674:
case 3015:
case 4013:
case 82:
case 567:
case 1129:
case 1069:
case 3016:
case 2380:
case 2003:
case 3519:
case 3120:
case 4017:
case 911:
case 3486:
case 4024:
case 2438:
case 678:
case 1966:
case 3052:
case 1811:
case 1910:
case 3573:
case 1802:
case 1760:
case 787:
case 3203:
case 2007:
case 3289:
case 3042:
case 3422:
case 732:
case 2780:
case 4079:
case 3908:
case 1352:
case 2215:
case 1965:
case 2419:
case 1608:
case 1108:
case 4023:
case 863:
case 247:
case 2590:
case 3249:
case 1177:
case 1677:
case 3082:
case 1138:
case 3456:
case 3692:
case 2946:
case 675:
case 1875:
case 1250:
case 3529:
case 3110:
case 3610:
case 674:
case 2750:
case 3026:
case 200:
case 2396:
case 2501:
case 1520:
case 2531:
case 1119:
case 771:
case 1619:
case 1876:
case 3034:
case 1359:
case 3555:
case 649:
case 1420:
case 3891:
case 1854:
case 3990:
case 421:
case 2974:
case 530:
case 3282:
case 881:
case 1818:
case 3546:
case 1883:
case 3474:
case 1334:
case 938:
case 3795:
case 3340:
case 3762:
case 173:
case 2863:
case 3545:
case 220:
case 3800:
case 934:
case 4005:
case 3380:
case 1631:
case 1853:
case 2120:
case 1131:
case 1601:
case 2060:
case 1101:
case 1112:
case 4035:
case 2016:
case 1884:
case 980:
case 3522:
case 494:
case 1389:
case 2973:
case 3199:
case 495:
case 1080:
case 2015:
case 3473:
case 877:
case 2538:
case 3586:
case 2278:
case 2369:
case 612:
case 1690:
case 662:
case 2207:
case 1778:
case 3215:
case 1155:
case 2938:
case 3419:
case 3986:
case 1828:
case 3780:
case 974:
case 882:
case 422:
case 709:
case 768:
case 1789:
case 718:
case 2422:
case 3037:
case 2289:
case 1146:
case 2042:
case 1857:
case 1466:
case 26:
case 286:
case 2203:
case 454:
case 2233:
case 3216:
case 1156:
case 3985:
case 3260:
case 1337:
case 1145:
case 1378:
case 2898:
case 1307:
case 2259:
case 3945:
case 765:
case 3512:
case 3501:
case 1122:
case 300:
case 2026:
case 573:
case 185:
case 570:
case 1185:
case 2446:
case 2110:
case 1685:
case 3956:
case 3740:
case 978:
case 2574:
case 184:
case 2234:
case 1599:
case 6:
case 2204:
case 3946:
case 1734:
case 1186:
case 2445:
case 2082:
case 3955:
case 764:
case 714:
case 1749:
case 347:
case 3349:
case 1931:
case 1901:
case 503:
case 1912:
case 446:
case 1474:
case 3809:
case 464:
case 2499:
case 1556:
case 1795:
case 1340:
case 3304:
case 758:
case 3999:
case 415:
case 3883:
case 1429:
case 25:
case 2371:
case 3420:
case 1555:
case 1796:
case 1034:
case 1990:
case 1004:
case 908:
case 2296:
case 3854:
case 1891:
case 3843:
case 3737:
case 3690:
case 3303:
case 2174:
case 1199:
case 2360:
case 2316:
case 1473:
case 87:
case 3884:
case 2629:
case 2129:
case 1585:
case 3389:
case 3631:
case 2752:
case 1380:
case 3112:
case 1252:
case 4068:
case 3101:
case 840:
case 1438:
case 3269:
case 3378:
case 3645:
case 628:
case 2342:
case 795:
case 843:
case 267:
case 1408:
case 1922:
case 2832:
case 3733:
case 1985:
case 3847:
case 3156:
case 739:
case 2966:
case 1078:
case 3789:
case 3857:
case 3146:
case 1007:
case 3155:
case 1215:
case 2280:
case 388:
case 4094:
case 1780:
case 2326:
case 330:
case 1955:
case 2638:
case 3186:
case 3686:
case 2177:
case 652:
case 1362:
case 2108:
case 3749:
case 3599:
case 3704:
case 1395:
case 1740:
case 2240:
case 100:
case 1750:
case 34:
case 3095:
case 1501:
case 721:
case 1396:
case 1512:
case 3061:
case 2144:
case 2644:
case 3598:
case 1663:
case 101:
case 1443:
case 2109:
case 757:
case 356:
case 2683:
case 2183:
case 943:
case 3758:
case 2654:
case 3714:
case 2093:
case 58:
case 1017:
case 467:
case 2991:
case 1664:
case 545:
case 690:
case 3430:
case 329:
case 2351:
case 1439:
case 3567:
case 3379:
case 3268:
case 1235:
case 1205:
case 3874:
case 1418:
case 3317:
case 3070:
case 2184:
case 1079:
case 3788:
case 1206:
case 2094:
case 2900:
case 3713:
case 2736:
case 1921:
case 516:
case 689:
case 2831:
case 1820:
case 1698:
case 387:
case 1770:
case 1521:
case 2530:
case 1976:
case 2270:
case 3563:
case 3294:
case 2467:
case 3102:
case 2335:
case 102:
case 3632:
case 3132:
case 166:
case 2751:
case 144:
case 1088:
case 3779:
case 2846:
case 1975:
case 1241:
case 18:
case 3967:
case 2657:
case 2741:
case 209:
case 4069:
case 3717:
case 627:
case 2306:
case 2068:
case 268:
case 2855:
case 650:
case 3313:
case 2628:
case 1487:
case 2128:
case 3564:
case 2498:
case 1058:
case 1281:
case 1865:
case 1667:
case 3348:
case 3675:
case 1892:
case 1447:
case 2372:
case 246:
case 264:
case 3293:
case 1810:
case 1457:
case 2822:
case 3723:
case 215:
case 265:
case 501:
case 396:
case 3314:
case 3998:
case 804:
case 3819:
case 3327:
case 3176:
case 2191:
case 2691:
case 1727:
case 660:
case 1714:
case 2528:
case 937:
case 90:
case 2258:
case 2557:
case 4026:
case 3484:
case 3511:
case 874:
case 3502:
case 2984:
case 3272:
case 1598:
case 1297:
case 571:
case 2600:
case 2630:
case 596:
case 3663:
case 859:
case 3163:
case 2944:
case 3454:
case 3206:
case 3079:
case 1963:
case 878:
case 2213:
case 3820:
case 3921:
case 172:
case 2288:
case 587:
case 4042:
case 2939:
case 46:
case 1070:
case 532:
case 1567:
case 2918:
case 3575:
case 2983:
case 2394:
case 2768:
case 3205:
case 826:
case 3409:
case 3164:
case 279:
case 2954:
case 2041:
case 1400:
case 1430:
case 129:
case 2554:
case 4060:
case 838:
case 132:
case 2035:
case 1313:
case 1724:
case 1967:
case 2224:
case 2368:
case 62:
case 1602:
case 1102:
case 1294:
case 1111:
case 2509:
case 1779:
case 717:
case 3013:
case 4015:
case 1632:
case 1132:
case 3698:
case 3198:
case 1563:
case 981:
case 2987:
case 348:
case 1176:
case 1676:
case 2072:
case 556:
case 2553:
case 899:
case 3457:
case 3866:
case 3902:
case 1358:
case 3810:
case 2947:
case 196:
case 3761:
case 977:
case 835:
case 1723:
case 3014:
case 3447:
case 1675:
case 1348:
case 2411:
case 4071:
case 834:
case 1293:
case 423:
case 3058:
case 2397:
case 1808:
case 298:
case 1564:
case 1838:
case 3865:
case 420:
case 3281:
case 2543:
case 1877:
case 531:
case 2928:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748466002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,];
var gg_b = "1748466002/";

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
