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
case 1448:
case 3714:
case 3522:
case 1060:
case 91:
case 660:
case 403:
case 1456:
case 229:
case 716:
case 1510:
case 863:
case 2910:
case 3802:
case 591:
case 4063:
case 3462:
case 2628:
case 765:
case 358:
case 731:
case 2302:
case 304:
case 726:
case 2964:
case 1400:
case 3772:
case 185:
case 219:
case 1635:
case 4017:
case 1495:
case 1677:
case 2121:
case 568:
case 908:
case 909:
case 234:
case 2:
case 28:
case 1485:
case 3002:
case 225:
case 3673:
case 1486:
case 3572:
case 109:
case 531:
case 3420:
case 1411:
case 2272:
case 3132:
case 1021:
case 39:
case 769:
case 768:
case 2606:
case 1022:
case 3445:
case 985:
case 3131:
case 3722:
case 189:
case 2633:
case 3488:
case 215:
case 2160:
case 516:
case 974:
case 1474:
case 2532:
case 3064:
case 379:
case 905:
case 2172:
case 2901:
case 266:
case 3638:
case 1822:
case 565:
case 2902:
case 3231:
case 1455:
case 2214:
case 791:
case 2171:
case 2493:
case 1931:
case 378:
case 805:
case 2587:
case 2961:
case 260:
case 3556:
case 3774:
case 2597:
case 1334:
case 1798:
case 465:
case 3243:
case 532:
case 2195:
case 163:
case 2893:
case 1943:
case 1421:
case 60:
case 3199:
case 1997:
case 1011:
case 2847:
case 3020:
case 2641:
case 2100:
case 1086:
case 1012:
case 597:
case 874:
case 2970:
case 3755:
case 3898:
case 3287:
case 3004:
case 2124:
case 3524:
case 1558:
case 3712:
case 2757:
case 618:
case 3347:
case 1546:
case 2295:
case 2666:
case 737:
case 2734:
case 885:
case 2398:
case 3845:
case 2083:
case 3953:
case 3143:
case 619:
case 1720:
case 520:
case 1999:
case 3804:
case 2200:
case 1812:
case 431:
case 1886:
case 1617:
case 2047:
case 2156:
case 2946:
case 1745:
case 2148:
case 3930:
case 3393:
case 1989:
case 783:
case 3088:
case 68:
case 3061:
case 1387:
case 3724:
case 1758:
case 3512:
case 2370:
case 469:
case 2945:
case 1471:
case 2853:
case 1504:
case 24:
case 3613:
case 1397:
case 2534:
case 3596:
case 468:
case 3846:
case 2362:
case 1934:
case 2665:
case 2174:
case 1343:
case 3257:
case 2618:
case 145:
case 1460:
case 4036:
case 1545:
case 3949:
case 3159:
case 1048:
case 2212:
case 1056:
case 1147:
case 1957:
case 3070:
case 443:
case 3785:
case 2255:
case 949:
case 3862:
case 2346:
case 889:
case 2358:
case 1770:
case 1588:
case 3402:
case 1085:
case 1389:
case 3330:
case 3993:
case 888:
case 3401:
case 1399:
case 3574:
case 2797:
case 3983:
case 3861:
case 491:
case 3870:
case 2274:
case 2196:
case 797:
case 1856:
case 3134:
case 81:
case 854:
case 1761:
case 503:
case 1959:
case 1024:
case 3058:
case 3947:
case 3046:
case 2186:
case 963:
case 1835:
case 51:
case 2307:
case 1709:
case 2418:
case 165:
case 774:
case 3328:
case 2584:
case 2739:
case 2805:
case 2594:
case 554:
case 2540:
case 803:
case 2465:
case 677:
case 1278:
case 3469:
case 26:
case 3176:
case 1672:
case 3294:
case 1150:
case 448:
case 2323:
case 991:
case 3735:
case 2844:
case 705:
case 1877:
case 3906:
case 3007:
case 2880:
case 1671:
case 3390:
case 3933:
case 3527:
case 364:
case 52:
case 2005:
case 1233:
case 892:
case 1707:
case 3125:
case 2309:
case 3344:
case 4055:
case 1538:
case 3779:
case 3380:
case 1339:
case 3807:
case 2775:
case 3950:
case 785:
case 3601:
case 1723:
case 396:
case 1178:
case 3276:
case 3503:
case 968:
case 2828:
case 2044:
case 3305:
case 652:
case 1908:
case 2227:
case 969:
case 3208:
case 2090:
case 131:
case 509:
case 1105:
case 2442:
case 3073:
case 1803:
case 2554:
case 1463:
case 1419:
case 311:
case 2708:
case 168:
case 3275:
case 1340:
case 169:
case 3378:
case 2776:
case 1738:
case 72:
case 931:
case 445:
case 1937:
case 4048:
case 709:
case 3703:
case 143:
case 3237:
case 2279:
case 1827:
case 1180:
case 585:
case 2006:
case 2907:
case 286:
case 672:
case 1325:
case 2373:
case 1954:
case 1144:
case 810:
case 916:
case 2033:
case 2784:
case 754:
case 2338:
case 71:
case 3175:
case 1003:
case 897:
case 574:
case 1829:
case 2466:
case 1280:
case 3239:
case 206:
case 505:
case 1939:
case 3980:
case 2725:
case 1773:
case 1926:
case 1027:
case 1244:
case 3990:
case 2878:
case 3226:
case 2909:
case 1290:
case 832:
case 3717:
case 748:
case 1429:
case 2866:
case 312:
case 200:
case 2969:
case 2751:
case 749:
case 932:
case 3192:
case 1696:
case 3181:
case 1265:
case 3620:
case 1817:
case 4071:
case 1686:
case 3116:
case 1218:
case 3473:
case 671:
case 2649:
case 3918:
case 1063:
case 183:
case 322:
case 1427:
case 1655:
case 2516:
case 2582:
case 2581:
case 280:
case 1351:
case 2967:
case 545:
case 3438:
case 3292:
case 1819:
case 3698:
case 137:
case 2768:
case 2842:
case 1403:
case 826:
case 2715:
case 1982:
case 1017:
case 1991:
case 252:
case 3216:
case 1118:
case 2433:
case 3661:
case 409:
case 2428:
case 3867:
case 3519:
case 937:
case 3407:
case 120:
case 2791:
case 2782:
case 3318:
case 745:
case 1915:
case 3069:
case 2781:
case 1166:
case 408:
case 4022:
case 983:
case 3151:
case 3423:
case 3941:
case 1767:
case 1241:
case 2313:
case 1242:
case 2018:
case 2515:
case 4021:
case 3942:
case 2263:
case 2117:
case 488:
case 110:
case 2552:
case 3517:
case 549:
case 2490:
case 3115:
case 213:
case 1695:
case 3966:
case 489:
case 3067:
case 2551:
case 1392:
case 197:
case 1141:
case 1600:
case 1769:
case 3251:
case 606:
case 2818:
case 2119:
case 2217:
case 41:
case 1952:
case 903:
case 132:
case 1921:
case 1443:
case 2802:
case 924:
case 3910:
case 259:
case 1210:
case 3222:
case 433:
case 1832:
case 1922:
case 2607:
case 135:
case 2801:
case 258:
case 1360:
case 3731:
case 2522:
case 2470:
case 328:
case 547:
case 1675:
case 1497:
case 329:
case 4015:
case 1164:
case 2521:
case 23:
case 284:
case 4052:
case 3453:
case 3121:
case 3680:
case 1639:
case 470:
case 2760:
case 576:
case 3644:
case 2609:
case 3122:
case 2002:
case 3690:
case 38:
case 204:
case 3430:
case 318:
case 2446:
case 867:
case 2772:
case 3964:
case 776:
case 2132:
case 961:
case 1640:
case 450:
case 501:
case 139:
case 556:
case 1971:
case 2445:
case 255:
case 138:
case 3606:
case 2560:
case 1102:
case 3271:
case 1684:
case 325:
case 2864:
case 2404:
case 1322:
case 1960:
case 2571:
case 1321:
case 15:
case 2572:
case 542:
case 1434:
case 2420:
case 279:
case 3364:
case 998:
case 1201:
case 4091:
case 3483:
case 366:
case 3172:
case 3493:
case 644:
case 4092:
case 3214:
case 3171:
case 3902:
case 2231:
case 278:
case 1202:
case 862:
case 394:
case 3160:
case 402:
case 1859:
case 2199:
case 3543:
case 2888:
case 2020:
case 1034:
case 1783:
case 3970:
case 787:
case 3642:
case 1146:
case 1057:
case 1793:
case 4037:
case 2189:
case 1948:
case 2898:
case 2004:
case 3049:
case 3304:
case 1261:
case 1747:
case 1615:
case 898:
case 3961:
case 1386:
case 2556:
case 481:
case 1312:
case 3587:
case 1396:
case 3962:
case 3320:
case 3597:
case 541:
case 1262:
case 899:
case 3195:
case 2098:
case 2804:
case 2383:
case 1553:
case 4026:
case 1900:
case 1651:
case 2464:
case 2197:
case 707:
case 2289:
case 1834:
case 1258:
case 4039:
case 2187:
case 1355:
case 1924:
case 1059:
case 770:
case 3093:
case 2524:
case 861:
case 2712:
case 456:
case 3285:
case 167:
case 2500:
case 3666:
case 1162:
case 550:
case 3295:
case 401:
case 1374:
case 2953:
case 3599:
case 3083:
case 3734:
case 1995:
case 2846:
case 2795:
case 3362:
case 1097:
case 1996:
case 3830:
case 1889:
case 3174:
case 3296:
case 3211:
case 3665:
case 4084:
case 1220:
case 839:
case 2858:
case 3212:
case 655:
case 3286:
case 3904:
case 2159:
case 3618:
case 2257:
case 507:
case 1912:
case 2785:
case 3361:
case 2070:
case 750:
case 3370:
case 3789:
case 1245:
case 895:
case 3945:
case 1348:
case 2669:
case 4025:
case 2700:
case 3534:
case 3799:
case 2134:
case 1692:
case 2870:
case 3274:
case 3111:
case 1298:
case 3743:
case 1120:
case 4008:
case 1974:
case 2353:
case 3998:
case 1395:
case 2555:
case 1385:
case 244:
case 1089:
case 1691:
case 1682:
case 3186:
case 2259:
case 1288:
case 2947:
case 2157:
case 4076:
case 2748:
case 1431:
case 824:
case 1547:
case 3559:
case 2330:
case 3787:
case 2402:
case 3358:
case 1145:
case 2574:
case 1300:
case 2667:
case 1432:
case 4057:
case 833:
case 2469:
case 1826:
case 1936:
case 524:
case 3525:
case 2108:
case 1929:
case 3028:
case 3127:
case 3880:
case 735:
case 1273:
case 3307:
case 3973:
case 2529:
case 3103:
case 2536:
case 1075:
case 3805:
case 1780:
case 1578:
case 3739:
case 3540:
case 2140:
case 296:
case 514:
case 1039:
case 3828:
case 1632:
case 2503:
case 673:
case 4059:
case 1238:
case 2184:
case 2009:
case 2208:
case 976:
case 467:
case 2390:
case 1728:
case 101:
case 2125:
case 1173:
case 2344:
case 1482:
case 1903:
case 3203:
case 3576:
case 1550:
case 3078:
case 1979:
case 3575:
case 1094:
case 901:
case 2139:
case 75:
case 2610:
case 2237:
case 1040:
case 3177:
case 2703:
case 1876:
case 3850:
case 1415:
case 714:
case 386:
case 2126:
case 3006:
case 3907:
case 57:
case 3373:
case 2928:
case 1109:
case 1733:
case 340:
case 1528:
case 690:
case 3442:
case 4043:
case 1025:
case 2727:
case 1329:
case 2306:
case 738:
case 211:
case 3708:
case 3833:
case 893:
case 1223:
case 882:
case 2579:
case 2378:
case 176:
case 3441:
case 3537:
case 1750:
case 1884:
case 3179:
case 147:
case 4089:
case 2980:
case 306:
case 1076:
case 351:
case 841:
case 2990:
case 1840:
case 1209:
case 599:
case 3725:
case 1894:
case 981:
case 2154:
case 2944:
case 724:
case 1544:
case 1452:
case 802:
case 3784:
case 3033:
case 627:
case 3338:
case 1935:
case 462:
case 535:
case 2873:
case 1825:
case 3740:
case 2965:
case 1852:
case 2181:
case 1634:
case 2192:
case 435:
case 1425:
case 1657:
case 2116:
case 2182:
case 230:
case 1851:
case 2918:
case 3649:
case 2604:
case 3406:
case 3752:
case 1015:
case 1363:
case 1319:
case 1484:
case 499:
case 2342:
case 187:
case 941:
case 1494:
case 1167:
case 498:
case 3478:
case 1565:
case 1068:
case 3969:
case 3913:
case 4031:
case 2281:
case 2292:
case 1051:
case 273:
case 767:
case 3647:
case 3715:
case 982:
case 4032:
case 170:
case 2216:
case 2282:
case 1659:
case 3693:
case 801:
case 3582:
case 1408:
case 3967:
case 3592:
case 461:
case 856:
case 346:
case 1815:
case 950:
case 1697:
case 2151:
case 1882:
case 1816:
case 3065:
case 907:
case 1687:
case 3263:
case 1892:
case 150:
case 1881:
case 2152:
case 1454:
case 2215:
case 2867:
case 45:
case 1542:
case 2661:
case 2318:
case 3782:
case 3716:
case 2563:
case 3792:
case 3781:
case 2069:
case 2013:
case 193:
case 2268:
case 970:
case 414:
case 495:
case 323:
case 357:
case 3818:
case 2251:
case 1699:
case 987:
case 3865:
case 3630:
case 1016:
case 1091:
case 1917:
case 1082:
case 2646:
case 2409:
case 933:
case 102:
case 2115:
case 3490:
case 2869:
case 424:
case 3653:
case 636:
case 1765:
case 2860:
case 1301:
case 2635:
case 2332:
case 37:
case 2331:
case 2424:
case 361:
case 480:
case 1302:
case 4066:
case 1:
case 1690:
case 18:
case 2485:
case 1644:
case 2014:
case 2564:
case 2871:
case 1680:
case 925:
case 3639:
case 2677:
case 1453:
case 452:
case 76:
case 2510:
case 1732:
case 551:
case 3164:
case 3497:
case 129:
case 966:
case 128:
case 860:
case 2456:
case 2448:
case 506:
case 335:
case 3360:
case 2071:
case 3922:
case 4041:
case 1628:
case 3654:
case 477:
case 274:
case 3831:
case 994:
case 1221:
case 3637:
case 1910:
case 3443:
case 2072:
case 10:
case 2501:
case 1633:
case 115:
case 194:
case 56:
case 3459:
case 413:
case 1531:
case 90:
case 2931:
case 3202:
case 3914:
case 1902:
case 2627:
case 929:
case 1171:
case 2821:
case 928:
case 1901:
case 2822:
case 1364:
case 9:
case 98:
case 3434:
case 2496:
case 1310:
case 209:
case 423:
case 395:
case 314:
case 786:
case 125:
case 1260:
case 3684:
case 2629:
case 3102:
case 1606:
case 338:
case 2022:
case 3971:
case 3972:
case 2764:
case 22:
case 3694:
case 1272:
case 1678:
case 3995:
case 1734:
case 1398:
case 819:
case 572:
case 1083:
case 4005:
case 685:
case 3374:
case 1295:
case 367:
case 2253:
case 752:
case 1285:
case 3749:
case 2704:
case 2546:
case 3530:
case 8:
case 3355:
case 1148:
case 3246:
case 1224:
case 2617:
case 94:
case 1047:
case 1946:
case 3652:
case 2230:
case 1156:
case 3170:
case 3900:
case 780:
case 3651:
case 2074:
case 3553:
case 2999:
case 777:
case 1893:
case 1597:
case 2334:
case 1962:
case 2798:
case 3311:
case 557:
case 828:
case 3312:
case 2570:
case 2788:
case 160:
case 1961:
case 605:
case 2422:
case 1304:
case 1049:
case 1345:
case 1256:
case 2130:
case 3270:
case 2663:
case 3793:
case 2987:
case 2086:
case 2012:
case 3956:
case 46:
case 2561:
case 3057:
case 2997:
case 1847:
case 3034:
case 1100:
case 249:
case 4028:
case 471:
case 1543:
case 4033:
case 2283:
case 2095:
case 3324:
case 1358:
case 2588:
case 2770:
case 2085:
case 1787:
case 1559:
case 362:
case 3547:
case 2293:
case 406:
case 1186:
case 3682:
case 3691:
case 2247:
case 1988:
case 3385:
case 2959:
case 3104:
case 3099:
case 1998:
case 3395:
case 2762:
case 61:
case 960:
case 2000:
case 3298:
case 1196:
case 3692:
case 1274:
case 2856:
case 500:
case 2520:
case 2183:
case 1155:
case 2471:
case 2895:
case 2746:
case 1853:
case 772:
case 825:
case 1557:
case 3730:
case 1370:
case 580:
case 2147:
case 3087:
case 1618:
case 245:
case 2460:
case 2545:
case 1286:
case 546:
case 1904:
case 2048:
case 3220:
case 3198:
case 1830:
case 4006:
case 3753:
case 3097:
case 62:
case 3996:
case 486:
case 723:
case 2934:
case 940:
case 2538:
case 1737:
case 356:
case 2339:
case 1576:
case 880:
case 3492:
case 4093:
case 3416:
case 4083:
case 2233:
case 1309:
case 3173:
case 301:
case 1754:
case 78:
case 683:
case 7:
case 231:
case 3026:
case 3927:
case 1044:
case 3837:
case 2908:
case 1129:
case 1227:
case 342:
case 525:
case 637:
case 226:
case 2250:
case 3854:
case 3632:
case 1828:
case 1938:
case 2976:
case 719:
case 1775:
case 1465:
case 3578:
case 2337:
case 1739:
case 3379:
case 951:
case 1103:
case 1594:
case 2354:
case 1584:
case 2835:
case 2709:
case 265:
case 3506:
case 1229:
case 3839:
case 1880:
case 1127:
case 3054:
case 3929:
case 1525:
case 2079:
case 2375:
case 2994:
case 729:
case 3936:
case 3037:
case 3138:
case 515:
case 16:
case 1890:
case 216:
case 2150:
case 2940:
case 1235:
case 3825:
case 3935:
case 766:
case 1539:
case 2376:
case 1033:
case 50:
case 3590:
case 291:
case 3706:
case 2417:
case 610:
case 3544:
case 2509:
case 1878:
case 2290:
case 3894:
case 3107:
case 2773:
case 2926:
case 2027:
case 3840:
case 151:
case 1050:
case 106:
case 2939:
case 528:
case 3884:
case 2280:
case 1923:
case 823:
case 1537:
case 2975:
case 2394:
case 269:
case 2463:
case 2507:
case 268:
case 2105:
case 3329:
case 44:
case 3025:
case 2803:
case 3528:
case 2384:
case 140:
case 3207:
case 3084:
case 3733:
case 725:
case 2325:
case 2144:
case 2029:
case 519:
case 872:
case 2622:
case 2228:
case 3876:
case 1177:
case 243:
case 1279:
case 2827:
case 2180:
case 2523:
case 3979:
case 1078:
case 3169:
case 146:
case 3741:
case 3815:
case 3476:
case 1581:
case 180:
case 2351:
case 1592:
case 972:
case 1591:
case 3408:
case 3317:
case 292:
case 283:
case 3742:
case 2118:
case 370:
case 1433:
case 2982:
case 2916:
case 2991:
case 1647:
case 2992:
case 626:
case 1842:
case 3051:
case 2819:
case 2165:
case 1913:
case 3068:
case 428:
case 203:
case 3213:
case 3167:
case 3494:
case 387:
case 2429:
case 100:
case 3319:
case 3015:
case 3518:
case 1752:
case 1406:
case 1649:
case 2315:
case 2063:
case 3425:
case 1042:
case 2696:
case 2611:
case 3634:
case 616:
case 333:
case 86:
case 177:
case 2381:
case 415:
case 3765:
case 494:
case 2392:
case 297:
case 113:
case 2266:
case 1480:
case 3439:
case 2391:
case 302:
case 2316:
case 210:
case 2382:
case 1552:
case 977:
case 1444:
case 3016:
case 3917:
case 3689:
case 2624:
case 3699:
case 806:
case 1818:
case 157:
case 2141:
case 3081:
case 3437:
case 3541:
case 393:
case 3643:
case 669:
case 1792:
case 952:
case 2968:
case 220:
case 1791:
case 2915:
case 3542:
case 2656:
case 3892:
case 1263:
case 946:
case 3687:
case 3919:
case 886:
case 2648:
case 1065:
case 2241:
case 2767:
case 1369:
case 1313:
case 1568:
case 74:
case 643:
case 3475:
case 3697:
case 473:
case 1002:
case 3872:
case 3485:
case 3014:
case 175:
case 1609:
case 3564:
case 1001:
case 3495:
case 3635:
case 3860:
case 796:
case 667:
case 3332:
case 955:
case 1771:
case 3331:
case 2314:
case 99:
case 2922:
case 1801:
case 2360:
case 1461:
case 1462:
case 521:
case 2831:
case 3814:
case 2443:
case 1521:
case 412:
case 2372:
case 184:
case 1623:
case 3701:
case 3456:
case 3702:
case 979:
case 1522:
case 298:
case 2608:
case 721:
case 3931:
case 3821:
case 1810:
case 3627:
case 354:
case 1231:
case 736:
case 1232:
case 3932:
case 3710:
case 1064:
case 3603:
case 388:
case 1488:
case 427:
case 959:
case 1722:
case 3022:
case 711:
case 1445:
case 155:
case 2102:
case 3764:
case 564:
case 1010:
case 2640:
case 2972:
case 19:
case 904:
case 32:
case 2434:
case 309:
case 2321:
case 25:
case 490:
case 1572:
case 308:
case 2322:
case 417:
case 295:
case 214:
case 1571:
case 4013:
case 4069:
case 2457:
case 1864:
case 1673:
case 1088:
case 1930:
case 722:
case 2924:
case 2059:
case 3811:
case 496:
case 3896:
case 875:
case 1289:
case 2652:
case 2258:
case 3617:
case 517:
case 1187:
case 3812:
case 590:
case 1464:
case 2857:
case 1197:
case 1098:
case 1804:
case 1383:
case 2553:
case 3074:
case 1953:
case 3720:
case 1796:
case 1845:
case 267:
case 3253:
case 464:
case 1500:
case 67:
case 773:
case 2161:
case 3704:
case 3359:
case 2530:
case 661:
case 3055:
case 1786:
case 553:
case 3558:
case 2985:
case 1524:
case 3663:
case 3130:
case 2948:
case 527:
case 1898:
case 1004:
case 348:
case 858:
case 1755:
case 3561:
case 712:
case 2793:
case 3987:
case 3086:
case 3562:
case 4007:
case 3011:
case 3096:
case 1199:
case 1297:
case 349:
case 859:
case 3153:
case 2262:
case 2668:
case 3855:
case 1243:
case 2396:
case 2311:
case 3798:
case 944:
case 2386:
case 3570:
case 2312:
case 3357:
case 4023:
case 3422:
case 2682:
case 1259:
case 878:
case 4038:
case 2288:
case 1157:
case 1058:
case 3024:
case 3959:
case 2593:
case 2104:
case 3761:
case 144:
case 3247:
case 2583:
case 2974:
case 1353:
case 3848:
case 2681:
case 2692:
case 512:
case 2887:
case 2300:
case 1667:
case 3598:
case 1330:
case 3085:
case 1756:
case 2324:
case 2145:
case 3770:
case 2955:
case 3588:
case 1862:
case 436:
case 262:
case 1785:
case 2087:
case 3249:
case 2986:
case 1070:
case 3957:
case 3147:
case 2899:
case 1949:
case 3545:
case 3460:
case 1234:
case 3343:
case 522:
case 639:
case 89:
case 2220:
case 3824:
case 3934:
case 1846:
case 1795:
case 2911:
case 2097:
case 2996:
case 2753:
case 1511:
case 3520:
case 3397:
case 1062:
case 3472:
case 1700:
case 695:
case 614:
case 3746:
case 1586:
case 573:
case 2356:
case 3758:
case 1061:
case 2730:
case 3387:
case 2245:
case 331:
case 2927:
case 2533:
case 3106:
case 1208:
case 704:
case 670:
case 242:
case 1184:
case 1305:
case 3908:
case 2837:
case 1467:
case 3250:
case 2854:
case 2632:
case 911:
case 2238:
case 1950:
case 1140:
case 3723:
case 3976:
case 3077:
case 1807:
case 3035:
case 3538:
case 1779:
case 607:
case 1125:
case 775:
case 1823:
case 1933:
case 1390:
case 2705:
case 1284:
case 3877:
case 3984:
case 3573:
case 936:
case 3206:
case 2054:
case 2936:
case 1809:
case 3375:
case 1978:
case 3079:
case 4004:
case 784:
case 1294:
case 1176:
case 1413:
case 1469:
case 2826:
case 759:
case 1777:
case 2379:
case 4045:
case 2075:
case 1536:
case 1328:
case 3354:
case 579:
case 1529:
case 365:
case 1225:
case 758:
case 3835:
case 2894:
case 3290:
case 3128:
case 3836:
case 1154:
case 2505:
case 1333:
case 1990:
case 3244:
case 3926:
case 641:
case 3027:
case 2107:
case 3939:
case 2076:
case 2977:
case 2884:
case 4058:
case 1239:
case 2303:
case 247:
case 1873:
case 2825:
case 3003:
case 1175:
case 2123:
case 2451:
case 136:
case 2778:
case 2580:
case 1350:
case 827:
case 1736:
case 2327:
case 391:
case 559:
case 2544:
case 3417:
case 121:
case 2706:
case 778:
case 1905:
case 650:
case 1928:
case 2109:
case 2733:
case 2207:
case 2084:
case 2415:
case 1254:
case 1126:
case 3622:
case 3180:
case 1139:
case 343:
case 1703:
case 964:
case 3036:
case 3523:
case 3937:
case 2094:
case 2808:
case 3738:
case 1579:
case 2336:
case 575:
case 1378:
case 3340:
case 693:
case 4061:
case 755:
case 368:
case 111:
case 4062:
case 3419:
case 996:
case 2528:
case 3384:
case 3803:
case 2025:
case 3105:
case 2329:
case 1216:
case 1282:
case 4001:
case 2052:
case 3916:
case 642:
case 2051:
case 3567:
case 3981:
case 1366:
case 896:
case 3165:
case 1281:
case 3863:
case 2476:
case 2267:
case 2113:
case 404:
case 3351:
case 392:
case 953:
case 2742:
case 3427:
case 122:
case 601:
case 383:
case 3019:
case 3315:
case 2425:
case 1191:
case 1116:
case 927:
case 2851:
case 3817:
case 1620:
case 2852:
case 458:
case 2766:
case 233:
case 3513:
case 681:
case 2494:
case 3436:
case 1341:
case 2213:
case 2269:
case 43:
case 3429:
case 2518:
case 1645:
case 2015:
case 1717:
case 2091:
case 1646:
case 3142:
case 3624:
case 2689:
case 1252:
case 912:
case 2081:
case 2092:
case 3141:
case 3600:
case 2566:
case 930:
case 1115:
case 744:
case 3685:
case 2426:
case 1409:
case 821:
case 1517:
case 2718:
case 3391:
case 3316:
case 202:
case 4010:
case 1670:
case 250:
case 1942:
case 2881:
case 3648:
case 2919:
case 922:
case 2882:
case 1151:
case 282:
case 676:
case 2541:
case 1662:
case 3968:
case 1013:
case 1069:
case 811:
case 1407:
case 1215:
case 190:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760994002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,];
var gg_b = "1760994002/";

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
