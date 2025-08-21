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
case 2885:
case 3052:
case 3387:
case 1290:
case 2439:
case 1535:
case 2132:
case 1791:
case 433:
case 3120:
case 1283:
case 2537:
case 192:
case 1682:
case 2671:
case 1981:
case 353:
case 3226:
case 404:
case 14:
case 1367:
case 3848:
case 1196:
case 3867:
case 91:
case 3961:
case 2147:
case 1062:
case 2176:
case 3639:
case 314:
case 426:
case 1144:
case 1743:
case 703:
case 1940:
case 190:
case 2542:
case 2168:
case 958:
case 3762:
case 2417:
case 556:
case 734:
case 235:
case 648:
case 2583:
case 3082:
case 3357:
case 1691:
case 1833:
case 1992:
case 1253:
case 2854:
case 2590:
case 4020:
case 3206:
case 3333:
case 1951:
case 2235:
case 271:
case 2771:
case 1369:
case 4085:
case 3155:
case 3737:
case 478:
case 3388:
case 2035:
case 898:
case 465:
case 2538:
case 3618:
case 1217:
case 3282:
case 3154:
case 1813:
case 4084:
case 1888:
case 3753:
case 1706:
case 48:
case 15:
case 3683:
case 3950:
case 785:
case 284:
case 2437:
case 2800:
case 1101:
case 3847:
case 3389:
case 343:
case 513:
case 1368:
case 3642:
case 2916:
case 2344:
case 701:
case 1262:
case 1347:
case 723:
case 2453:
case 3868:
case 3619:
case 2539:
case 655:
case 1165:
case 2396:
case 3359:
case 3063:
case 788:
case 2490:
case 5:
case 3742:
case 1042:
case 1859:
case 2167:
case 77:
case 3026:
case 316:
case 1164:
case 1763:
case 3719:
case 3571:
case 263:
case 948:
case 4055:
case 22:
case 3993:
case 895:
case 3358:
case 475:
case 0:
case 3790:
case 736:
case 554:
case 1090:
case 3184:
case 3252:
case 869:
case 3783:
case 1858:
case 306:
case 2545:
case 3589:
case 2067:
case 1142:
case 3765:
case 3163:
case 1547:
case 1576:
case 1065:
case 1412:
case 2421:
case 963:
case 3764:
case 2048:
case 176:
case 1569:
case 2012:
case 3084:
case 3513:
case 1448:
case 1190:
case 108:
case 3588:
case 2232:
case 2465:
case 399:
case 1785:
case 4006:
case 2852:
case 3220:
case 2338:
case 1183:
case 1784:
case 2464:
case 13:
case 1467:
case 331:
case 2930:
case 105:
case 2317:
case 3815:
case 822:
case 2134:
case 2975:
case 686:
case 1137:
case 3558:
case 2170:
case 534:
case 756:
case 181:
case 451:
case 3055:
case 2269:
case 3106:
case 368:
case 375:
case 2687:
case 2135:
case 984:
case 2247:
case 2596:
case 3559:
case 2276:
case 661:
case 3433:
case 4026:
case 711:
case 1244:
case 2843:
case 3665:
case 1001:
case 521:
case 2268:
case 638:
case 744:
case 166:
case 3457:
case 503:
case 971:
case 501:
case 1201:
case 1045:
case 1903:
case 797:
case 1700:
case 3744:
case 174:
case 2068:
case 3488:
case 1044:
case 3000:
case 304:
case 1162:
case 62:
case 2047:
case 2789:
case 1469:
case 713:
case 3696:
case 1548:
case 2069:
case 2998:
case 2115:
case 258:
case 4091:
case 2444:
case 1335:
case 1447:
case 183:
case 453:
case 3834:
case 1549:
case 2806:
case 3182:
case 1468:
case 3870:
case 2114:
case 125:
case 2788:
case 3835:
case 2337:
case 2713:
case 1334:
case 3489:
case 2910:
case 3191:
case 255:
case 536:
case 1138:
case 3285:
case 2249:
case 2318:
case 128:
case 3284:
case 2390:
case 4082:
case 2212:
case 3152:
case 1221:
case 3459:
case 1923:
case 2032:
case 684:
case 1265:
case 90:
case 2319:
case 961:
case 1096:
case 4043:
case 2826:
case 3986:
case 2248:
case 441:
case 746:
case 164:
case 1600:
case 3644:
case 414:
case 2863:
case 1264:
case 3645:
case 2689:
case 1979:
case 2759:
case 3796:
case 673:
case 3771:
case 1714:
case 1188:
case 41:
case 3169:
case 2206:
case 3015:
case 185:
case 3854:
case 3590:
case 1113:
case 904:
case 1443:
case 2638:
case 123:
case 3855:
case 2082:
case 2357:
case 16:
case 3014:
case 3583:
case 1071:
case 1354:
case 101:
case 1482:
case 2762:
case 241:
case 3301:
case 1189:
case 3542:
case 583:
case 2904:
case 1907:
case 715:
case 2639:
case 665:
case 3147:
case 4068:
case 1452:
case 3365:
case 1159:
case 2867:
case 2263:
case 1864:
case 1491:
case 3438:
case 4047:
case 668:
case 2226:
case 2739:
case 1614:
case 253:
case 3972:
case 3537:
case 624:
case 3884:
case 2091:
case 188:
case 2120:
case 564:
case 3132:
case 926:
case 338:
case 3553:
case 1384:
case 827:
case 2849:
case 2052:
case 1506:
case 17:
case 3885:
case 576:
case 1463:
case 2980:
case 3419:
case 2252:
case 2184:
case 1426:
case 2358:
case 1909:
case 32:
case 1320:
case 2719:
case 1543:
case 3418:
case 880:
case 216:
case 2026:
case 1896:
case 999:
case 3167:
case 3148:
case 3490:
case 508:
case 2063:
case 3562:
case 3396:
case 3453:
case 931:
case 134:
case 1300:
case 3916:
case 448:
case 3345:
case 243:
case 2876:
case 968:
case 2389:
case 3800:
case 1844:
case 384:
case 3437:
case 975:
case 103:
case 1973:
case 566:
case 3034:
case 790:
case 1770:
case 2753:
case 924:
case 1735:
case 1928:
case 1271:
case 3214:
case 2618:
case 2282:
case 4012:
case 3538:
case 2388:
case 3070:
case 2155:
case 4049:
case 1552:
case 2457:
case 2664:
case 345:
case 3268:
case 515:
case 1343:
case 2701:
case 224:
case 3247:
case 3362:
case 1648:
case 2621:
case 1612:
case 774:
case 3687:
case 275:
case 1911:
case 3974:
case 268:
case 2922:
case 2106:
case 3269:
case 2055:
case 3170:
case 1649:
case 3401:
case 3975:
case 113:
case 2815:
case 1057:
case 2054:
case 2371:
case 278:
case 1258:
case 4035:
case 1391:
case 4070:
case 2085:
case 473:
case 3852:
case 3049:
case 299:
case 3465:
case 1749:
case 916:
case 3997:
case 1:
case 641:
case 3891:
case 817:
case 2084:
case 1352:
case 3048:
case 951:
case 1484:
case 3339:
case 1767:
case 2487:
case 1259:
case 154:
case 484:
case 2902:
case 2765:
case 2601:
case 3545:
case 2126:
case 728:
case 206:
case 2796:
case 3759:
case 592:
case 2645:
case 3501:
case 1326:
case 3267:
case 2986:
case 1647:
case 3248:
case 3826:
case 1363:
case 3319:
case 1842:
case 1818:
case 1669:
case 643:
case 3496:
case 3613:
case 1555:
case 3212:
case 1287:
case 2152:
case 4014:
case 3758:
case 776:
case 471:
case 891:
case 3249:
case 54:
case 2020:
case 4015:
case 2489:
case 3910:
case 3337:
case 3713:
case 914:
case 111:
case 2254:
case 1171:
case 3114:
case 1257:
case 3658:
case 590:
case 2834:
case 766:
case 461:
case 40:
case 616:
case 144:
case 3353:
case 839:
case 3069:
case 651:
case 2696:
case 2413:
case 2745:
case 3789:
case 3076:
case 1768:
case 705:
case 2000:
case 2956:
case 3999:
case 3068:
case 2744:
case 1747:
case 1776:
case 1089:
case 781:
case 2486:
case 129:
case 487:
case 2522:
case 157:
case 2380:
case 1511:
case 4092:
case 3809:
case 3023:
case 3530:
case 1723:
case 2610:
case 1920:
case 4051:
case 2393:
case 1124:
case 3575:
case 1309:
case 2699:
case 939:
case 3808:
case 1603:
case 767:
case 3079:
case 1202:
case 589:
case 4040:
case 59:
case 3996:
case 732:
case 1161:
case 2799:
case 3756:
case 3944:
case 540:
case 2107:
case 3945:
case 3410:
case 2989:
case 3003:
case 3316:
case 2502:
case 1056:
case 1105:
case 1328:
case 853:
case 3499:
case 2710:
case 3828:
case 3246:
case 2988:
case 1222:
case 4081:
case 3151:
case 2231:
case 2775:
case 1694:
case 1955:
case 2011:
case 1022:
case 207:
case 3046:
case 2892:
case 1954:
case 1777:
case 2774:
case 2851:
case 2173:
case 3901:
case 3430:
case 2305:
case 1141:
case 2840:
case 2422:
case 147:
case 1836:
case 1411:
case 2586:
case 2304:
case 4060:
case 3702:
case 3965:
case 2108:
case 2361:
case 1286:
case 196:
case 420:
case 3599:
case 3279:
case 1794:
case 1985:
case 2402:
case 2797:
case 2109:
case 1327:
case 1193:
case 1646:
case 3598:
case 398:
case 3622:
case 1984:
case 1795:
case 2674:
case 3094:
case 2881:
case 550:
case 3827:
case 659:
case 2493:
case 3942:
case 1102:
case 2505:
case 2008:
case 3919:
case 2879:
case 1507:
case 1261:
case 789:
case 742:
case 3990:
case 3793:
case 1408:
case 2866:
case 3650:
case 3780:
case 831:
case 949:
case 1093:
case 2227:
case 3195:
case 4077:
case 322:
case 498:
case 2028:
case 865:
case 3416:
case 2524:
case 2073:
case 4094:
case 980:
case 479:
case 1906:
case 3953:
case 899:
case 3680:
case 1331:
case 3146:
case 3177:
case 530:
case 217:
case 2111:
case 2525:
case 2561:
case 2803:
case 3240:
case 2029:
case 320:
case 1899:
case 577:
case 907:
case 1041:
case 2356:
case 1205:
case 1428:
case 927:
case 959:
case 3704:
case 1943:
case 682:
case 1156:
case 826:
case 3962:
case 1508:
case 752:
case 2007:
case 4079:
case 2229:
case 3040:
case 1004:
case 1830:
case 2131:
case 1407:
case 3625:
case 2580:
case 2322:
case 1681:
case 2228:
case 291:
case 3624:
case 1751:
case 3917:
case 1982:
case 649:
case 2593:
case 3811:
case 2877:
case 3938:
case 1692:
case 1991:
case 833:
case 1897:
case 2209:
case 3166:
case 750:
case 2027:
case 3081:
case 2894:
case 1573:
case 2550:
case 2461:
case 172:
case 2772:
case 1651:
case 1025:
case 1280:
case 2208:
case 2425:
case 1529:
case 4003:
case 1061:
case 3939:
case 2424:
case 3472:
case 1427:
case 3260:
case 2636:
case 2302:
case 1594:
case 2873:
case 1274:
case 2151:
case 359:
case 2246:
case 2277:
case 2828:
case 1098:
case 3798:
case 439:
case 2192:
case 2499:
case 3456:
case 1230:
case 570:
case 900:
case 2316:
case 1099:
case 2003:
case 3341:
case 2410:
case 562:
case 537:
case 210:
case 2498:
case 886:
case 1841:
case 987:
case 2756:
case 3799:
case 1478:
case 1423:
case 902:
case 572:
case 3959:
case 709:
case 2079:
case 2786:
case 1466:
case 3699:
case 2656:
case 212:
case 1172:
case 3958:
case 2575:
case 3127:
case 2181:
case 1880:
case 3610:
case 1479:
case 1932:
case 2023:
case 1297:
case 3698:
case 2294:
case 1893:
case 3380:
case 1631:
case 3522:
case 2078:
case 871:
case 560:
case 796:
case 491:
case 3486:
case 4073:
case 3881:
case 1097:
case 1611:
case 3674:
case 298:
case 4028:
case 2921:
case 1912:
case 2278:
case 3987:
case 2598:
case 1381:
case 2510:
case 1825:
case 2095:
case 132:
case 2372:
case 3402:
case 2599:
case 3556:
case 4029:
case 2160:
case 884:
case 1861:
case 1503:
case 2964:
case 1495:
case 3361:
case 519:
case 2965:
case 2702:
case 1340:
case 3304:
case 130:
case 1805:
case 3586:
case 1446:
case 602:
case 1477:
case 2474:
case 3422:
case 2430:
case 2901:
case 2475:
case 2336:
case 4008:
case 1075:
case 1210:
case 863:
case 3957:
case 82:
case 794:
case 295:
case 1030:
case 3128:
case 3730:
case 2077:
case 4009:
case 1523:
case 307:
case 3933:
case 1351:
case 3011:
case 3697:
case 1578:
case 3775:
case 269:
case 3356:
case 969:
case 737:
case 449:
case 1236:
case 1856:
case 3207:
case 995:
case 220:
case 3561:
case 3803:
case 762:
case 848:
case 612:
case 3716:
case 2251:
case 2398:
case 770:
case 547:
case 2750:
case 1934:
case 3073:
case 393:
case 152:
case 482:
case 2292:
case 1175:
case 2416:
case 3028:
case 1130:
case 1609:
case 3441:
case 3009:
case 222:
case 3823:
case 4011:
case 610:
case 2780:
case 3878:
case 1460:
case 2983:
case 2650:
case 1673:
case 1197:
case 2793:
case 1709:
case 2990:
case 979:
case 3386:
case 1629:
case 3480:
case 2641:
case 3616:
case 2179:
case 3302:
case 669:
case 719:
case 2605:
case 2939:
case 1802:
case 557:
case 529:
case 3208:
case 2604:
case 858:
case 1394:
case 2123:
case 2724:
case 3772:
case 1727:
case 3894:
case 19:
case 2081:
case 189:
case 459:
case 3027:
case 427:
case 4031:
case 2938:
case 3846:
case 2092:
case 3877:
case 3593:
case 855:
case 1110:
case 3273:
case 1822:
case 3672:
case 2917:
case 3405:
case 391:
case 3228:
case 2330:
case 1377:
case 1346:
case 3322:
case 3580:
case 1915:
case 140:
case 1440:
case 3404:
case 594:
case 2040:
case 679:
case 200:
case 2705:
case 2661:
case 2962:
case 2103:
case 1216:
case 1492:
case 27:
case 2384:
case 3570:
case 3791:
case 1120:
case 3887:
case 3283:
case 288:
case 3682:
case 3218:
case 392:
case 3534:
case 3752:
case 483:
case 3981:
case 555:
case 236:
case 1739:
case 4044:
case 3242:
case 3367:
case 2865:
case 697:
case 51:
case 2491:
case 1848:
case 1263:
case 763:
case 4045:
case 1867:
case 2159:
case 3196:
case 613:
case 894:
case 1961:
case 1662:
case 3348:
case 3039:
case 1639:
case 2563:
case 558:
case 114:
case 646:
case 2907:
case 911:
case 390:
case 3415:
case 3940:
case 1904:
case 3145:
case 2526:
case 6:
case 141:
case 1905:
case 464:
case 2071:
case 201:
case 1357:
case 1082:
case 3017:
case 3691:
case 2715:
case 3992:
case 654:
case 3237:
case 784:
case 829:
case 3253:
case 3857:
case 3951:
case 1717:
case 2714:
case 3652:
case 1155:
case 2734:
case 1006:
case 809:
case 1737:
case 1690:
case 43:
case 2157:
case 1618:
case 221:
case 408:
case 2735:
case 315:
case 2591:
case 1154:
case 545:
case 2770:
case 1683:
case 3706:
case 3101:
case 2844:
case 1243:
case 4065:
case 3434:
case 1876:
case 143:
case 1847:
case 1941:
case 476:
case 771:
case 1642:
case 3368:
case 234:
case 735:
case 3347:
case 3376:
case 3262:
case 3663:
case 2929:
case 1619:
case 1359:
case 2908:
case 3165:
case 4001:
case 1063:
case 3239:
case 611:
case 1742:
case 761:
case 3859:
case 2896:
case 3042:
case 9:
case 116:
case 644:
case 3763:
case 3960:
case 481:
case 3514:
case 1291:
case 3083:
case 1571:
case 1637:
case 1790:
case 2426:
case 2909:
case 3018:
case 1358:
case 3090:
case 1718:
case 3121:
case 2635:
case 1980:
case 2670:
case 3606:
case 2463:
case 548:
case 1783:
case 656:
case 106:
case 3064:
case 52:
case 1765:
case 3449:
case 2485:
case 3568:
case 254:
case 3065:
case 3576:
case 623:
case 3547:
case 2767:
case 3412:
case 1487:
case 66:
case 601:
case 3569:
case 2087:
case 2352:
case 2838:
case 415:
case 3448:
case 1513:
case 1588:
case 2:
case 3785:
case 45:
case 199:
case 1085:
case 2391:
case 2258:
case 3118:
case 178:
case 3995:
case 2712:
case 1721:
case 3654:
case 1054:
case 4090:
case 3314:
case 305:
case 418:
case 131:
case 2520:
case 2382:
case 3755:
case 2649:
case 3137:
case 3685:
case 2213:
case 4083:
case 3153:
case 3871:
case 819:
case 2817:
case 3315:
case 1055:
case 297:
case 1922:
case 168:
case 2288:
case 2612:
case 3946:
case 2648:
case 4042:
case 1559:
case 3244:
case 124:
case 688:
case 1665:
case 2455:
case 2289:
case 3245:
case 758:
case 3001:
case 2667:
case 2454:
case 1664:
case 67:
case 366:
case 3201:
case 256:
case 535:
case 3045:
case 2089:
case 2776:
case 3903:
case 985:
case 104:
case 2768:
case 1488:
case 3162:
case 44:
case 3469:
case 860:
case 901:
case 4038:
case 1587:
case 2306:
case 3512:
case 2584:
case 2013:
case 2931:
case 492:
case 2088:
case 2837:
case 244:
case 2233:
case 3476:
case 3447:
case 3117:
case 3549:
case 2257:
case 2585:
case 211:
case 2171:
case 3620:
case 1835:
case 133:
case 3334:
case 3138:
case 862:
case 748:
case 1284:
case 837:
case 2883:
case 586:
case 328:
case 1152:
case 4017:
case 2287:
case 1533:
case 3720:
case 2818:
case 3923:
case 2842:
case 3139:
case 621:
case 2676:
case 1986:
case 2647:
case 1644:
case 364:
case 4062:
case 1458:
case 870:
case 2420:
case 97:
case 50:
case 2652:
case 171:
case 4058:
case 1235:
case 2951:
case 1015:
case 3355:
case 743:
case 2253:
case 974:
case 504:
case 385:
case 2691:
case 323:
case 3715:
case 2833:
case 2017:
case 301:
case 3354:
case 3071:
case 1583:
case 676:
case 1014:
case 533:
case 1417:
case 608:
case 1301:
case 2145:
case 1936:
case 983:
case 1542:
case 3189:
case 290:
case 925:
case 3563:
case 2144:
case 2062:
case 1519:
case 1147:
case 605:
case 2039:
case 3452:
case 2219:
case 186:
case 3491:
case 3865:
case 336:
case 3614:
case 2981:
case 2534:
case 3927:
case 1972:
case 2218:
case 388:
case 964:
case 2887:
case 2038:
case 3821:
case 1132:
case 2290:
case 3384:
case 2570:
case 138:
case 716:
case 1439:
case 411:
case 37:
case 3506:
case 2312:
case 2332:
case 3463:
case 2858:
case 2606:
case 3670:
case 4057:
case 2121:
case 1820:
case 2515:
case 218:
case 674:
case 877:
case 4033:
case 1442:
case 12:
case 3320:
case 3582:
case 1149:
case 2514:
case 163:
case 2083:
case 506:
case 976:
case 2960:
case 2763:
case 908:
case 2164:
case 1418:
case 3543:
case 58:
case 1148:
case 2726:
case 625:
case 3908:
case 1562:
case 1453:
case 2470:
case 905:
case 1539:
case 568:
case 3929:
case 2663:
case 3406:
case 2347:
case 2262:
case 3300:
case 2368:
case 981:
case 2626:
case 2434:
case 531:
case 1437:
case 454:
case 1800:
case 2101:
case 3973:
case 25:
case 2813:
case 1214:
case 3591:
case 321:
case 714:
case 3735:
case 215:
case 664:
case 1538:
case 2217:
case 3133:
case 446:
case 524:
case 3734:
case 3552:
case 1215:
case 3667:
case 3454:
case 145:
case 3343:
case 3289:
case 733:
case 3455:
case 915:
case 2244:
case 1843:
case 3648:
case 95:
case 3288:
case 2532:
case 2754:
case 1974:
case 3911:
case 2684:
case 1269:
case 2153:
case 281:
case 2137:
case 1975:
case 1401:
case 2755:
case 3057:
case 543:
case 1317:
case 1930:
case 23:
case 2654:
case 2995:
case 346:
case 2784:
case 1464:
case 1657:
case 516:
case 2183:
case 690:
case 403:
case 2994:
case 1232:
case 1891:
case 2190:
case 2448:
case 2021:
case 3087:
case 2569:
case 3352:
case 148:
case 3484:
case 2412:
case 3500:
case 1544:
case 3485:
case 2449:
case 1067:
case 3748:
case 553:
case 1759:
case 799:
case 2979:
case 1689:
case 2264:
case 3668:
case 765:
case 1248:
case 2139:
case 2265:
case 3059:
case 1032:
case 2923:
case 3669:
case 840:
case 3818:
case 423:
case 1613:
case 1496:
case 94:
case 1688:
case 2978:
case 1758:
case 706:
case 228:
case 4071:
case 3883:
case 2966:
case 3058:
case 11:
case 1383:
case 3554:
case 155:
case 3769:
case 1910:
case 1713:
case 1337:
case 541:
case 3171:
case 2468:
case 225:
case 3585:
case 1806:
case 2117:
case 283:
case 2476:
case 3233:
case 3837:
case 3088:
case 1444:
case 3400:
case 488:
case 3013:
case 1069:
case 1115:
case 2548:
case 1659:
case 1789:
case 2469:
case 1076:
case 2162:
case 2044:
case 3768:
case 731:
case 618:
case 1068:
case 1999:
case 2903:
case 3776:
case 768:
case 3089:
case 2045:
case 356:
case 3125:
case 1294:
case 2893:
case 357:
case 329:
case 2932:
case 2546:
case 2479:
case 1530:
case 3920:
case 437:
case 1066:
case 1295:
case 1808:
case 3603:
case 3202:
case 782:
case 4004:
case 99:
case 989:
case 470:
case 652:
case 3779:
case 3086:
case 4005:
case 2478:
case 3161:
case 3900:
case 1944:
case 110:
case 3104:
case 3816:
case 460:
case 2136:
case 3105:
case 1316:
case 650:
case 1499:
case 472:
case 2731:
case 2595:
case 2275:
case 3373:
case 4025:
case 2969:
case 2098:
case 1277:
case 3678:
case 2274:
case 2850:
case 1151:
case 2594:
case 3694:
case 169:
case 3955:
case 2298:
case 2578:
case 3022:
case 4093:
case 1046:
case 2523:
case 2030:
case 3777:
case 3954:
case 1722:
case 277:
case 3150:
case 2075:
case 1475:
case 2579:
case 1807:
case 2299:
case 3256:
case 1203:
case 2804:
case 69:
case 689:
case 3836:
case 952:
case 2477:
case 2446:
case 2805:
case 3307:
case 2340:
case 230:
case 1702:
case 1965:
case 2948:
case 3286:
case 396:
case 2967:
case 640:
case 3002:
case 1279:
case 179:
case 950:
case 85:
case 1095:
case 1372:
case 232:
case 1266:
case 2825:
case 2381:
case 1510:
case 815:
case 3327:
case 1921:
case 3677:
case 1278:
case 2912:
case 3646:
case 3795:
case 3984:
case 2611:
case 267:
case 198:
case 3531:
case 2824:
case 1223:
case 1094:
case 3180:
case 1942:
case 3926:
case 1641:
case 3409:
case 2886:
case 3102:
case 1060:
case 739:
case 1919:
case 3963:
case 2629:
case 3507:
case 2540:
case 3261:
case 2378:
case 1793:
case 3225:
case 3080:
case 1194:
case 3408:
case 2673:
case 1983:
case 1780:
case 2628:
case 4022:
case 805:
case 2592:
case 2272:
case 122:
case 1195:
case 3224:
case 3898:
case 930:
case 1416:
case 1693:
case 83:
case 1831:
case 1292:
case 1572:
case 252:
case 1937:
case 2175:
case 580:
case 2581:
case 1310:
case 3906:
case 1398:
case 2728:
case 1177:
case 1146:
case 2935:
case 3122:
case 496:
case 791:
case 1741:
case 507:
case 977:
case 4002:
case 2608:
case 3428:
case 1399:
case 2016:
case 3740:
case 1704:
case 2036:
case 2492:
case 2707:
case 2216:
case 4086:
case 3156:
case 3005:
case 3241:
case 1103:
case 2560:
case 632:
case 864:
case 1661:
case 793:
case 1040:
case 100:
case 240:
case 2198:
case 1051:
case 1374:
case 828:
case 1330:
case 1917:
case 362:
case 3751:
case 1624:
case 3250:
case 187:
case 429:
case 1375:
case 3528:
case 3024:
case 2395:
case 1166:
case 2072:
case 3897:
case 3293:
case 3781:
case 3952:
case 1724:
case 883:
case 372:
case 1123:
case 3280:
case 2394:
case 360:
case 3061:
case 3529:
case 3186:
case 2802:
case 1472:
case 494:
case 2481:
case 1260:
case 2222:
case 500:
case 489:
case 1211:
case 49:
case 4072:
case 87:
case 2678:
case 1031:
case 2623:
case 3969:
case 3098:
case 3010:
case 1350:
case 1798:
case 3275:
case 3731:
case 3230:
case 2666:
case 3403:
case 1502:
case 3968:
case 587:
case 1341:
case 3136:
case 2679:
case 769:
case 2431:
case 2816:
case 3841:
case 2329:
case 2703:
case 1799:
case 2161:
case 2308:
case 1959:
case 779:
case 3360:
case 502:
case 2603:
case 1699:
case 3172:
case 86:
case 2920:
case 823:
case 1610:
case 3577:
case 1698:
case 3546:
case 257:
case 229:
case 3631:
case 2125:
case 1380:
case 3893:
case 2180:
case 1881:
case 1325:
case 209:
case 3097:
case 1674:
case 2984:
case 2677:
case 1987:
case 2646:
case 2327:
case 1630:
case 821:
case 1402:
case 1797:
case 2985:
case 1556:
case 3503:
case 3861:
case 3967:
case 919:
case 296:
case 712:
case 2286:
case 1361:
case 1129:
case 1304:
case 3340:
case 1586:
case 2307:
case 3805:
case 3477:
case 3446:
case 2836:
case 1422:
case 180:
case 450:
case 1305:
case 3116:
case 2256:
case 3299:
case 3566:
case 710:
case 1851:
case 1173:
case 2150:
case 3210:
case 3711:
case 1957:
case 2954:
case 2777:
case 1011:
case 3351:
case 2022:
case 520:
case 1697:
case 2955:
case 1231:
case 1775:
case 2694:
case 3016:
case 2205:
case 2041:
case 629:
case 3236:
case 2473:
case 3729:
case 595:
case 3608:
case 3856:
case 2899:
case 1803:
case 2204:
case 1561:
case 787:
case 1029:
case 2122:
case 1525:
case 432:
case 3728:
case 3935:
case 3970:
case 2331:
case 3773:
case 2906:
case 193:
case 2527:
case 700:
case 1524:
case 352:
case 3130:
case 1028:
case 846:
case 1441:
case 3592:
case 3272:
case 1009:
case 2093:
case 4074:
case 3628:
case 1878:
case 813:
case 3323:
case 4075:
case 3551:
case 2408:
case 3378:
case 477:
case 4030:
case 350:
case 1386:
case 702:
case 598:
case 2963:
case 1008:
case 2760:
case 3708:
case 3379:
case 2926:
case 579:
case 1616:
case 909:
case 1493:
case 1636:
case 1302:
case 512:
case 1541:
case 929:
case 957:
case 1424:
case 342:
case 3802:
case 2186:
case 722:
case 2529:
case 3607:
case 1208:
case 4010:
case 2280:
case 2025:
case 139:
case 1895:
case 1772:
case 2952:
case 844:
case 2781:
case 1027:
case 647:
case 1550:
case 2293:
case 39:
case 2024:
case 3395:
case 2991:
case 994:
case 1846:
case 720:
case 1273:
case 2751:
case 2982:
case 262:
case 1672:
case 3914:
case 1228:
case 2875:
case 3346:
case 2311:
case 510:
case 1404:
case 3198:
case 3440:
case 3915:
case 2407:
case 1736:
case 3451:
case 2508:
case 2241:
case 3560:
case 2005:
case 3216:
case 2156:
case 3199:
case 3707:
case 3492:
case 2943:
case 270:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755795602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,];
var gg_b = "1755795602/";

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
