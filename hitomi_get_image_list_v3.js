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
case 1135:
case 1003:
case 36:
case 2321:
case 2192:
case 467:
case 459:
case 2983:
case 670:
case 1190:
case 4051:
case 905:
case 693:
case 1404:
case 1240:
case 1304:
case 611:
case 369:
case 357:
case 3298:
case 2871:
case 3576:
case 3773:
case 1915:
case 3201:
case 602:
case 2948:
case 2673:
case 2075:
case 3582:
case 498:
case 152:
case 218:
case 782:
case 2144:
case 920:
case 3479:
case 2920:
case 2260:
case 3120:
case 1355:
case 1262:
case 3986:
case 1253:
case 4057:
case 469:
case 3972:
case 457:
case 747:
case 3051:
case 2693:
case 2095:
case 2877:
case 737:
case 1968:
case 3855:
case 1780:
case 46:
case 367:
case 2427:
case 359:
case 2782:
case 1455:
case 3996:
case 399:
case 1123:
case 3748:
case 1568:
case 671:
case 2284:
case 224:
case 1013:
case 468:
case 2085:
case 2865:
case 497:
case 3572:
case 39:
case 3692:
case 3211:
case 1905:
case 4000:
case 358:
case 3544:
case 2881:
case 2061:
case 663:
case 3783:
case 1790:
case 3838:
case 1954:
case 3000:
case 1266:
case 3982:
case 1926:
case 1180:
case 2548:
case 3193:
case 2182:
case 1438:
case 1069:
case 3976:
case 2237:
case 217:
case 3243:
case 921:
case 3288:
case 2620:
case 1770:
case 1041:
case 3217:
case 3389:
case 3644:
case 3686:
case 368:
case 2744:
case 2887:
case 278:
case 1239:
case 1338:
case 804:
case 2818:
case 3672:
case 1845:
case 492:
case 3735:
case 1544:
case 551:
case 2434:
case 3158:
case 3314:
case 821:
case 608:
case 4069:
case 2033:
case 2635:
case 3047:
case 3615:
case 1250:
case 4036:
case 2252:
case 1173:
case 4041:
case 904:
case 2365:
case 2923:
case 199:
case 2715:
case 2381:
case 1748:
case 2670:
case 2535:
case 3239:
case 2722:
case 1592:
case 1672:
case 1720:
case 2590:
case 3036:
case 1686:
case 1217:
case 723:
case 168:
case 3069:
case 3889:
case 197:
case 590:
case 4047:
case 1489:
case 201:
case 2016:
case 392:
case 326:
case 3926:
case 706:
case 212:
case 2154:
case 2387:
case 2219:
case 3515:
case 3438:
case 3668:
case 2497:
case 3554:
case 3526:
case 3304:
case 2623:
case 2471:
case 169:
case 607:
case 1298:
case 2025:
case 1773:
case 2705:
case 1499:
case 2371:
case 2224:
case 3404:
case 1804:
case 2658:
case 4032:
case 3240:
case 3899:
case 1183:
case 3758:
case 545:
case 2990:
case 3135:
case 16:
case 2397:
case 789:
case 2935:
case 3605:
case 1992:
case 3190:
case 1855:
case 560:
case 609:
case 805:
case 732:
case 513:
case 2726:
case 159:
case 2754:
case 272:
case 3455:
case 2168:
case 3329:
case 3654:
case 362:
case 1682:
case 2680:
case 2408:
case 3228:
case 2377:
case 2209:
case 3429:
case 1829:
case 1972:
case 1010:
case 15:
case 3170:
case 2391:
case 2122:
case 9:
case 1479:
case 2558:
case 1120:
case 3922:
case 452:
case 3879:
case 591:
case 742:
case 1089:
case 1869:
case 2153:
case 2416:
case 333:
case 1511:
case 3953:
case 3639:
case 3336:
case 2909:
case 2270:
case 1244:
case 1286:
case 521:
case 128:
case 746:
case 2739:
case 3222:
case 1160:
case 3038:
case 3800:
case 1400:
case 2162:
case 1688:
case 736:
case 276:
case 1643:
case 4014:
case 3719:
case 1907:
case 884:
case 1300:
case 2316:
case 771:
case 1836:
case 231:
case 1550:
case 1737:
case 3441:
case 415:
case 1841:
case 2552:
case 3666:
case 3369:
case 3436:
case 366:
case 3940:
case 861:
case 3347:
case 3413:
case 3124:
case 295:
case 2924:
case 2140:
case 443:
case 638:
case 3539:
case 3014:
case 1611:
case 356:
case 2861:
case 3566:
case 2652:
case 2081:
case 648:
case 3763:
case 4038:
case 3447:
case 2885:
case 1731:
case 1998:
case 433:
case 1543:
case 890:
case 1847:
case 3752:
case 1784:
case 2433:
case 174:
case 2663:
case 475:
case 1410:
case 3332:
case 1943:
case 1678:
case 711:
case 2412:
case 1276:
case 64:
case 1351:
case 3810:
case 3029:
case 1501:
case 216:
case 2919:
case 2166:
case 835:
case 322:
case 3254:
case 2406:
case 3966:
case 1282:
case 3055:
case 2139:
case 2609:
case 2306:
case 2762:
case 230:
case 649:
case 845:
case 2091:
case 2753:
case 1917:
case 3662:
case 2008:
case 3851:
case 2524:
case 1310:
case 1451:
case 3540:
case 2895:
case 1131:
case 2952:
case 114:
case 3152:
case 1184:
case 1146:
case 3528:
case 1698:
case 4055:
case 1507:
case 891:
case 3640:
case 1774:
case 682:
case 2097:
case 265:
case 422:
case 3724:
case 3857:
case 1742:
case 3205:
case 2425:
case 3553:
case 12:
case 647:
case 1709:
case 2188:
case 3917:
case 913:
case 3310:
case 414:
case 3451:
case 2660:
case 2430:
case 3832:
case 3988:
case 960:
case 2117:
case 689:
case 885:
case 3760:
case 1055:
case 429:
case 2027:
case 2707:
case 3501:
case 3282:
case 2778:
case 122:
case 1119:
case 3410:
case 707:
case 3137:
case 3943:
case 2395:
case 2812:
case 42:
case 2143:
case 2330:
case 1029:
case 70:
case 2594:
case 175:
case 1756:
case 1205:
case 1553:
case 32:
case 2111:
case 1640:
case 2021:
case 2642:
case 4079:
case 642:
case 1303:
case 1163:
case 2375:
case 1403:
case 3131:
case 2150:
case 294:
case 2946:
case 3184:
case 3146:
case 1152:
case 945:
case 2273:
case 2798:
case 2931:
case 1928:
case 383:
case 3737:
case 3836:
case 1441:
case 3841:
case 1436:
case 1719:
case 2467:
case 3907:
case 3045:
case 2637:
case 3300:
case 3617:
case 1962:
case 3244:
case 1222:
case 328:
case 834:
case 1800:
case 1038:
case 3400:
case 2802:
case 3688:
case 3194:
case 3089:
case 1341:
case 3869:
case 1109:
case 3511:
case 2717:
case 281:
case 1336:
case 1469:
case 1953:
case 2833:
case 1447:
case 2750:
case 2537:
case 3543:
case 2198:
case 3847:
case 2101:
case 428:
case 2646:
case 1763:
case 264:
case 3650:
case 2461:
case 1215:
case 2283:
case 3174:
case 3292:
case 3611:
case 1014:
case 2361:
case 2974:
case 3588:
case 1940:
case 1156:
case 1347:
case 1413:
case 3142:
case 1124:
case 115:
case 984:
case 2385:
case 3517:
case 2711:
case 2055:
case 3139:
case 3609:
case 3306:
case 2939:
case 2662:
case 3753:
case 1188:
case 760:
case 355:
case 3524:
case 3556:
case 3830:
case 1542:
case 3077:
case 1430:
case 1117:
case 3895:
case 3312:
case 532:
case 2540:
case 1812:
case 1395:
case 3728:
case 1143:
case 3412:
case 1937:
case 3919:
case 2628:
case 3166:
case 1707:
case 3280:
case 465:
case 2119:
case 1778:
case 2966:
case 2226:
case 296:
case 58:
case 3656:
case 3624:
case 440:
case 3875:
case 2562:
case 1594:
case 2724:
case 275:
case 3509:
case 3425:
case 2553:
case 3740:
case 1111:
case 1825:
case 90:
case 802:
case 3071:
case 1674:
case 1150:
case 3325:
case 870:
case 3952:
case 1984:
case 1946:
case 455:
case 2152:
case 4077:
case 2528:
case 1859:
case 2163:
case 1701:
case 1375:
case 430:
case 909:
case 3087:
case 3867:
case 1637:
case 1467:
case 2719:
case 1178:
case 331:
case 2268:
case 2928:
case 3316:
case 2441:
case 495:
case 1546:
case 1584:
case 154:
case 3128:
case 2369:
case 2341:
case 1788:
case 2469:
case 2336:
case 181:
case 1717:
case 506:
case 1994:
case 790:
case 3739:
case 3402:
case 2962:
case 2800:
case 1220:
case 1960:
case 1802:
case 4034:
case 1367:
case 256:
case 164:
case 2763:
case 1684:
case 1349:
case 3081:
case 1248:
case 1461:
case 3065:
case 2447:
case 2313:
case 751:
case 1537:
case 441:
case 1198:
case 846:
case 2752:
case 431:
case 2124:
case 784:
case 3924:
case 1942:
case 3333:
case 1385:
case 3140:
case 836:
case 4087:
case 1449:
case 1283:
case 2014:
case 476:
case 3235:
case 2539:
case 871:
case 1974:
case 3290:
case 3849:
case 228:
case 2617:
case 1402:
case 464:
case 2160:
case 3960:
case 2400:
case 2688:
case 946:
case 2089:
case 548:
case 1416:
case 2272:
case 3788:
case 2869:
case 141:
case 381:
case 1270:
case 3994:
case 2737:
case 131:
case 3531:
case 2836:
case 1619:
case 538:
case 1316:
case 1552:
case 2841:
case 3743:
case 1128:
case 1087:
case 176:
case 2643:
case 3107:
case 1302:
case 1766:
case 2978:
case 1867:
case 3467:
case 936:
case 3178:
case 2300:
case 3449:
case 2611:
case 3361:
case 1849:
case 953:
case 2588:
case 2142:
case 2813:
case 1956:
case 454:
case 3942:
case 1264:
case 3385:
case 3833:
case 621:
case 2731:
case 3537:
case 3750:
case 886:
case 3198:
case 274:
case 734:
case 2746:
case 2784:
case 1861:
case 3349:
case 1081:
case 3684:
case 3461:
case 3631:
case 1919:
case 3806:
case 1280:
case 80:
case 3293:
case 902:
case 3778:
case 1406:
case 547:
case 2410:
case 3395:
case 2678:
case 2943:
case 582:
case 1728:
case 2276:
case 3143:
case 2351:
case 3330:
case 2917:
case 3495:
case 1753:
case 2310:
case 2794:
case 1830:
case 3542:
case 1008:
case 1556:
case 3430:
case 809:
case 993:
case 1895:
case 2832:
case 2760:
case 970:
case 130:
case 1762:
case 537:
case 1609:
case 3027:
case 1091:
case 2803:
case 3701:
case 2296:
case 53:
case 2578:
case 1459:
case 1963:
case 2131:
case 1325:
case 3984:
case 1952:
case 394:
case 2146:
case 3273:
case 785:
case 2099:
case 3931:
case 549:
case 3594:
case 539:
case 1740:
case 3825:
case 22:
case 2457:
case 1071:
case 2774:
case 1359:
case 3642:
case 3021:
case 1624:
case 54:
case 1875:
case 1690:
case 3865:
case 31:
case 848:
case 1635:
case 2692:
case 3683:
case 673:
case 2544:
case 3792:
case 690:
case 2783:
case 1434:
case 3061:
case 1664:
case 1958:
case 3834:
case 3520:
case 1481:
case 4067:
case 299:
case 478:
case 319:
case 3196:
case 661:
case 704:
case 2250:
case 3648:
case 3973:
case 1252:
case 3284:
case 838:
case 1365:
case 3772:
case 2288:
case 684:
case 923:
case 3620:
case 424:
case 268:
case 2389:
case 2686:
case 2644:
case 2445:
case 3583:
case 2592:
case 3786:
case 3887:
case 2672:
case 1590:
case 2720:
case 1318:
case 2838:
case 2345:
case 906:
case 2193:
case 1126:
case 1387:
case 112:
case 3182:
case 651:
case 1768:
case 2976:
case 2243:
case 3176:
case 586:
case 317:
case 101:
case 2696:
case 2399:
case 269:
case 2057:
case 1471:
case 2576:
case 98:
case 257:
case 2298:
case 882:
case 2773:
case 691:
case 847:
case 2201:
case 418:
case 3673:
case 50:
case 3075:
case 3897:
case 1821:
case 1990:
case 3274:
case 2183:
case 3321:
case 1397:
case 837:
case 1935:
case 989:
case 3983:
case 1705:
case 2499:
case 1964:
case 1256:
case 1224:
case 125:
case 509:
case 4095:
case 37:
case 2051:
case 3808:
case 3030:
case 849:
case 1680:
case 3877:
case 3776:
case 1408:
case 2855:
case 267:
case 932:
case 2207:
case 2278:
case 3782:
case 3891:
case 1726:
case 2596:
case 1827:
case 2479:
case 3327:
case 942:
case 1558:
case 100:
case 3920:
case 650:
case 4075:
case 2986:
case 7:
case 479:
case 298:
case 1012:
case 1970:
case 635:
case 1377:
case 25:
case 1308:
case 2010:
case 2972:
case 3371:
case 3705:
case 832:
case 2404:
case 325:
case 3658:
case 2899:
case 17:
case 705:
case 1192:
case 949:
case 3935:
case 2605:
case 2190:
case 2915:
case 1421:
case 1673:
case 4006:
case 3580:
case 2723:
case 2526:
case 1796:
case 3821:
case 3115:
case 252:
case 2554:
case 887:
case 3623:
case 4012:
case 2304:
case 94:
case 3471:
case 3012:
case 3970:
case 2429:
case 2505:
case 3209:
case 3377:
case 947:
case 2253:
case 511:
case 1186:
case 1144:
case 118:
case 1260:
case 3006:
case 2262:
case 982:
case 3491:
case 4059:
case 1891:
case 3523:
case 1030:
case 3477:
case 1808:
case 3168:
case 2626:
case 1095:
case 685:
case 1776:
case 2968:
case 570:
case 1284:
case 3252:
case 2013:
case 3263:
case 3923:
case 119:
case 1049:
case 1196:
case 1881:
case 2522:
case 1792:
case 2158:
case 3664:
case 3434:
case 1061:
case 2314:
case 2790:
case 4002:
case 1085:
case 806:
case 3690:
case 3033:
case 888:
case 2905:
case 3465:
case 11:
case 3635:
case 4016:
case 3570:
case 2069:
case 3768:
case 563:
case 4033:
case 721:
case 1176:
case 634:
case 301:
case 2926:
case 3318:
case 1993:
case 2180:
case 3980:
case 3002:
case 2438:
case 2515:
case 3126:
case 2668:
case 3387:
case 312:
case 3154:
case 1067:
case 3722:
case 2239:
case 178:
case 1887:
case 3535:
case 1786:
case 1818:
case 938:
case 3487:
case 3590:
case 2845:
case 1620:
case 203:
case 2036:
case 3564:
case 2770:
case 2622:
case 2041:
case 442:
case 4062:
case 2458:
case 1579:
case 1257:
case 800:
case 1805:
case 38:
case 2225:
case 3529:
case 2965:
case 2704:
case 1098:
case 2056:
case 205:
case 4028:
case 2873:
case 3305:
case 2577:
case 3555:
case 3203:
case 1496:
case 149:
case 432:
case 2671:
case 389:
case 3797:
case 3896:
case 2591:
case 2358:
case 1945:
case 629:
case 825:
case 1007:
case 3629:
case 3326:
case 3187:
case 489:
case 2987:
case 1078:
case 2380:
case 1679:
case 137:
case 3504:
case 3053:
case 3708:
case 2212:
case 1476:
case 3876:
case 1989:
case 1210:
case 3655:
case 1482:
case 2206:
case 918:
case 2138:
case 3062:
case 2893:
case 3791:
case 3938:
case 3882:
case 2997:
case 3415:
case 488:
case 2390:
case 3197:
case 1392:
case 2233:
case 3171:
case 3247:
case 1011:
case 1050:
case 3904:
case 3213:
case 924:
case 2052:
case 595:
case 2883:
case 2063:
case 2587:
case 3781:
case 2435:
case 2518:
case 2155:
case 3514:
case 2738:
case 2991:
case 978:
case 1689:
case 531:
case 3191:
case 1127:
case 3955:
case 323:
case 3108:
case 3236:
case 2370:
case 703:
case 1017:
case 2908:
case 3638:
case 3177:
case 1372:
case 1645:
case 3872:
case 2618:
case 3929:
case 1472:
case 1043:
case 1200:
case 3066:
case 2019:
case 726:
case 792:
case 3718:
case 2348:
case 1315:
case 1892:
case 3492:
case 438:
case 0:
case 2890:
case 3545:
case 1734:
case 878:
case 666:
case 4088:
case 643:
case 1904:
case 2864:
case 4017:
case 1213:
case 2199:
case 2046:
case 633:
case 2285:
case 3589:
case 1171:
case 4043:
case 1614:
case 1247:
case 1415:
case 1538:
case 3121:
case 758:
case 1886:
case 2420:
case 1066:
case 2745:
case 656:
case 1422:
case 3444:
case 3486:
case 1718:
case 2179:
case 3645:
case 2037:
case 3472:
case 1368:
case 901:
case 4011:
case 2870:
case 2789:
case 768:
case 123:
case 1108:
case 1236:
case 3088:
case 1241:
case 1177:
case 1514:
case 2320:
case 554:
case 2267:
case 3386:
case 3127:
case 1322:
case 1955:
case 349:
case 3721:
case 1896:
case 4078:
case 2823:
case 1914:
case 2621:
case 925:
case 1771:
case 2373:
case 34:
case 1165:
case 18:
case 2799:
case 1405:
case 1181:
case 3699:
case 3396:
case 2858:
case 1604:
case 696:
case 1134:
case 2275:
case 142:
case 439:
case 3482:
case 2060:
case 2:
case 798:
case 4001:
case 2880:
case 1882:
case 382:
case 2627:
case 2189:
case 1708:
case 3476:
case 44:
case 1876:
case 580:
case 187:
case 3989:
case 1655:
case 3210:
case 3376:
case 337:
case 1028:
case 1504:
case 1232:
case 2295:
case 2393:
case 3007:
case 1326:
case 759:
case 1187:
case 2779:
case 87:
case 2145:
case 1888:
case 1932:
case 3417:
case 3343:
case 1068:
case 2151:
case 1513:
case 3600:
case 1817:
case 3488:
case 1716:
case 2337:
case 171:
case 783:
case 2700:
case 4092:
case 976:
case 2549:
case 1238:
case 1106:
case 517:
case 1022:
case 1641:
case 2020:
case 1636:
case 3910:
case 941:
case 1112:
case 3289:
case 3443:
case 3317:
case 2437:
case 3388:
case 1547:
case 2157:
case 2384:
case 2649:
case 234:
case 51:
case 486:
case 2975:
case 3500:
case 408:
case 4086:
case 4044:
case 881:
case 3175:
case 1159:
case 3092:
case 2863:
case 2083:
case 2567:
case 854:
case 1850:
case 519:
case 1536:
case 3311:
case 153:
case 244:
case 2484:
case 2852:
case 2431:
case 2661:
case 1712:
case 1941:
case 2710:
case 2394:
case 1353:
case 193:
case 894:
case 1255:
case 1706:
case 577:
case 1807:
case 1362:
case 2227:
case 2967:
case 930:
case 1878:
case 409:
case 3378:
case 2100:
case 652:
case 1054:
case 2630:
case 3651:
case 1026:
case 1102:
case 3557:
case 3730:
case 727:
case 2809:
case 1328:
case 111:
case 1229:
case 1969:
case 1116:
case 2494:
case 3076:
case 1947:
case 3498:
case 579:
case 3185:
case 2985:
case 407:
case 1603:
case 2342:
case 1759:
case 965:
case 2374:
case 2961:
case 2949:
case 57:
case 3775:
case 309:
case 3398:
case 1440:
case 285:
case 714:
case 3551:
case 1204:
case 2442:
case 1725:
case 2595:
case 3840:
case 1532:
case 1730:
case 657:
case 4005:
case 1853:
case 2169:
case 311:
case 3453:
case 3969:
case 107:
case 500:
case 2080:
case 722:
case 3462:
case 3632:
case 2860:
case 1082:
case 3026:
case 3102:
case 1279:
case 2559:
case 370:
case 2612:
case 1407:
case 66:
case 572:
case 2136:
case 3712:
case 3936:
case 2277:
case 2842:
case 2456:
case 2113:
case 2424:
case 830:
case 659:
case 2874:
case 2625:
case 470:
case 1775:
case 1301:
case 667:
case 1096:
case 525:
case 1149:
case 250:
case 2703:
case 3759:
case 402:
case 4026:
case 816:
case 1498:
case 3898:
case 840:
case 2324:
case 2933:
case 775:
case 2147:
case 3603:
case 1072:
case 1443:
case 1317:
case 273:
case 3112:
case 2837:
case 512:
case 981:
case 3843:
case 3547:
case 3238:
case 186:
case 2419:
case 3106:
case 501:
case 1044:
case 4015:
case 658:
case 363:
case 290:
case 346:
case 3636:
case 3339:
case 2319:
case 1839:
case 261:
case 3669:
case 3366:
case 3439:
case 3702:
case 2218:
case 336:
case 3932:
case 1130:
case 3513:
case 954:
case 1488:
case 1195:
case 3817:
case 2132:
case 1785:
case 2831:
case 3536:
case 3850:
case 353:
case 668:
case 3541:
case 2884:
case 2747:
case 1450:
case 471:
case 2064:
case 2103:
case 3159:
case 3214:
case 831:
case 1761:
case 436:
case 2090:
case 3903:
case 2463:
case 410:
case 1500:
case 4022:
case 3613:
case 1749:
case 2363:
case 2234:
case 446:
case 463:
case 2502:
case 756:
case 1175:
case 1411:
case 2265:
case 3569:
case 2925:
case 251:
case 3125:
case 2516:
case 697:
case 55:
case 1860:
case 2082:
case 2651:
case 3093:
case 922:
case 82:
case 3575:
case 2279:
case 780:
case 3751:
case 2730:
case 2557:
case 1169:
case 1916:
case 2853:
case 191:
case 1409:
case 1525:
case 1732:
case 113:
case 559:
case 3710:
case 3394:
case 625:
case 2828:
case 160:
case 1277:
case 567:
case 4073:
case 1606:
case 2610:
case 1559:
case 2167:
case 2478:
case 2407:
case 1291:
case 3227:
case 3949:
case 1625:
case 2301:
case 1023:
case 2149:
case 2096:
case 2398:
case 3530:
case 1842:
case 385:
case 1424:
case 1113:
case 1456:
case 3442:
case 2299:
case 2840:
case 56:
case 3595:
case 1512:
case 1271:
case 3985:
case 1356:
case 1147:
case 1933:
case 1659:
case 1324:
case 135:
case 2510:
case 557:
case 2161:
case 1703:
case 1297:
case 569:
case 3221:
case 600:
case 1419:
case 286:
case 3561:
case 2866:
case 874:
case 597:
case 3819:
case 190:
case 434:
case 2910:
case 3585:
case 1837:
case 781:
case 2388:
case 3437:
case 1070:
case 1912:
case 933:
case 3667:
case 3110:
case 2343:
case 3151:
case 2130:
case 754:
case 2951:
case 2600:
case 3930:
case 3337:
case 2488:
case 3700:
case 161:
case 2839:
case 1287:
case 1319:
case 3549:
case 1103:
case 1090:
case 1959:
case 1463:
case 2785:
case 3446:
case 3484:
case 3852:
case 1846:
case 3431:
case 1064:
case 3661:
case 2450:
case 3384:
case 1352:
case 3649:
case 601:
case 1925:
case 1265:
case 828:
case 2411:
case 1516:
case 558:
case 1713:
case 2957:
case 1281:
case 956:
case 2749:
case 59:
case 3048:
case 619:
case 3319:
case 3616:
case 3218:
case 4090:
case 2702:
case 236:
case 2439:
case 776:
case 1549:
case 503:
case 2932:
case 2888:
case 3602:
case 3769:
case 1151:
case 484:
case 2513:
case 4064:
case 2817:
case 3533:
case 61:
case 3837:
case 856:
case 592:
case 2843:
case 1667:
case 451:
case 3912:
case 2547:
case 1110:
case 210:
case 2238:
case 2641:
case 2022:
case 3906:
case 2339:
case 390:
case 246:
case 1975:
case 2613:
case 3234:
case 490:
case 3352:
case 1649:
case 1157:
case 473:
case 3265:
case 1331:
case 351:
case 974:
case 3713:
case 3831:
case 2850:
case 1446:
case 1484:
case 2733:
case 795:
case 144:
case 3884:
case 3846:
case 2541:
case 1852:
case 1431:
case 3064:
case 1863:
case 3103:
case 2647:
case 3035:
case 2159:
case 1567:
case 1083:
case 1685:
case 678:
case 3959:
case 2255:
case 3559:
case 2706:
case 2878:
case 1967:
case 1227:
case 4023:
case 3291:
case 2428:
case 3136:
case 2941:
case 445:
case 1710:
case 360:
case 293:
case 3606:
case 3894:
case 1751:
case 2969:
case 3732:
case 435:
case 740:
case 3902:
case 3080:
case 450:
case 2632:
case 1100:
case 2026:
case 1630:
case 202:
case 2102:
case 350:
case 3703:
case 2759:
case 1374:
case 3297:
case 1961:
case 2005:
case 2133:
case 552:
case 3512:
case 896:
case 92:
case 1342:
case 3659:
case 3356:
case 2603:
case 3147:
case 335:
case 2440:
case 1530:
case 3842:
case 1757:
case 1824:
case 185:
case 2913:
case 345:
case 3424:
case 3456:
case 460:
case 2725:
case 1073:
case 1949:
case 3874:
case 1474:
case 654:
case 2765:
case 3464:
case 1031:
case 3681:
case 3052:
case 1084:
case 1199:
case 104:
case 3490:
case 3587:
case 999:
case 2781:
case 3435:
case 2734:
case 1249:
case 515:
case 1261:
case 2415:
case 1383:
case 3335:
case 681:
case 3233:
case 3364:
case 99:
case 1285:
case 421:
case 2247:
case 1037:
case 3618:
case 2872:
case 2929:
case 3129:
case 321:
case 3687:
case 1870:
case 288:
case 533:
case 2886:
case 3581:
case 2787:
case 1420:
case 206:
case 3820:
case 2422:
case 664:
case 1320:
case 2039:
case 3991:
case 1927:
case 3738:
case 1267:
case 566:
case 4063:
case 2191:
case 2955:
case 2236:
case 2108:
case 223:
case 1789:
case 3370:
case 4052:
case 3908:
case 2638:
case 305:
case 3024:
case 3056:
case 2040:
case 3114:
case 3259:
case 1074:
case 3671:
case 96:
case 1527:
case 3591:
case 2896:
case 289:
case 1823:
case 3358:
case 420:
case 2181:
case 3323:
case 1858:
case 3934:
case 3458:
case 2134:
case 1275:
case 969:
case 2529:
case 28:
case 957:
case 3225:
case 2053:
case 3009:
case 3212:
case 596:
case 1094:
case 522:
case 95:
case 287:
case 2876:
case 3571:
case 2655:
case 320:
case 1060:
case 3206:
case 3893:
case 2938:
case 3608:
case 2882:
case 1521:
case 967:
case 3918:
case 959:
case 3987:
case 1145:
case 2504:
case 3729:
case 3373:
case 24:
case 4094:
case 898:
case 3799:
case 1965:
case 1704:
case 4:
case 52:
case 4060:
case 640:
case 1934:
case 616:
case 2579:
case 1981:
case 952:
case 3275:
case 1259:
case 630:
case 3074:
case 2496:
case 1591:
case 2721:
case 3823:
case 1697:
case 105:
case 529:
case 1056:
case 3473:
case 1873:
case 1577:
case 237:
case 2679:
case 2376:
case 2251:
case 1729:
case 2007:
case 3393:
case 2382:
case 1987:
case 3779:
case 3145:
case 1380:
case 2078:
case 665:
case 869:
case 3060:
case 3880:
case 1480:
case 1608:
case 857:
case 718:
case 2854:
case 2826:
case 3521:
case 3627:
case 3094:
case 247:
case 1571:
case 2589:
case 71:
case 1971:
case 2011:
case 3921:
case 1714:
case 3448:
case 3383:
case 2121:
case 2392:
case 1063:
case 719:
case 2492:
case 1665:
case 868:
case 3890:
case 3483:
case 3249:
case 2999:
case 1464:
case 3031:
case 2050:
case 724:
case 3864:
case 2868:
case 1977:
case 1370:
case 903:
case 2088:
case 2017:
case 2372:
case 4084:
case 3320:
case 3927:
case 3267:
case 1738:
case 2127:
case 238:
case 583:
case 2386:
case 778:
case 2689:
case 2822:
case 926:
case 2979:
case 89:
case 992:
case 1581:
case 1019:
case 3745:
case 1534:
case 1202:
case 3179:
case 248:
case 1565:
case 858:
case 1129:
case 528:
case 1687:
case 3870:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758348001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,];
var gg_b = "1758348001/";

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
