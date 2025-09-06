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
case 768:
case 2583:
case 1526:
case 3591:
case 889:
case 2760:
case 1989:
case 375:
case 55:
case 2814:
case 396:
case 189:
case 3180:
case 1776:
case 549:
case 3836:
case 1720:
case 3701:
case 1058:
case 2566:
case 1505:
case 3132:
case 3568:
case 244:
case 3104:
case 1384:
case 551:
case 395:
case 4016:
case 512:
case 376:
case 1789:
case 4087:
case 1620:
case 3601:
case 2202:
case 2269:
case 722:
case 2382:
case 982:
case 3026:
case 70:
case 2028:
case 1995:
case 2330:
case 3216:
case 1695:
case 2556:
case 701:
case 365:
case 1187:
case 3901:
case 1068:
case 1676:
case 3129:
case 3005:
case 2184:
case 2915:
case 3161:
case 2099:
case 1748:
case 3810:
case 450:
case 2011:
case 535:
case 223:
case 3954:
case 2781:
case 787:
case 3764:
case 3793:
case 1435:
case 1853:
case 424:
case 683:
case 3654:
case 437:
case 3243:
case 2196:
case 2892:
case 1237:
case 2100:
case 2615:
case 3137:
case 2221:
case 304:
case 1879:
case 3503:
case 347:
case 958:
case 573:
case 469:
case 2316:
case 3754:
case 281:
case 2981:
case 1894:
case 1483:
case 2085:
case 1863:
case 2547:
case 4082:
case 621:
case 536:
case 2207:
case 2823:
case 1648:
case 1886:
case 1003:
case 138:
case 1182:
case 1817:
case 602:
case 820:
case 4030:
case 154:
case 28:
case 3693:
case 2074:
case 854:
case 120:
case 62:
case 3696:
case 259:
case 538:
case 193:
case 4062:
case 4009:
case 2698:
case 1090:
case 2826:
case 1494:
case 2065:
case 1463:
case 2122:
case 1006:
case 3984:
case 2367:
case 2637:
case 3115:
case 893:
case 1597:
case 3441:
case 3209:
case 2661:
case 2937:
case 3684:
case 2331:
case 863:
case 3996:
case 3900:
case 1921:
case 24:
case 1486:
case 163:
case 1162:
case 1025:
case 3389:
case 2805:
case 1453:
case 704:
case 643:
case 4024:
case 1146:
case 2139:
case 873:
case 3590:
case 2761:
case 2357:
case 3410:
case 3320:
case 2164:
case 173:
case 3700:
case 1721:
case 387:
case 1479:
case 3525:
case 3376:
case 2798:
case 2512:
case 1049:
case 1856:
case 4046:
case 3395:
case 3775:
case 1571:
case 290:
case 835:
case 2651:
case 3097:
case 301:
case 765:
case 2645:
case 2553:
case 2127:
case 3231:
case 931:
case 942:
case 2632:
case 1734:
case 402:
case 3213:
case 1959:
case 378:
case 1131:
case 2579:
case 2904:
case 1088:
case 93:
case 1659:
case 30:
case 421:
case 1167:
case 776:
case 3874:
case 795:
case 2945:
case 2729:
case 1592:
case 3840:
case 1973:
case 2041:
case 2932:
case 669:
case 149:
case 851:
case 3811:
case 1902:
case 4057:
case 2414:
case 1969:
case 2594:
case 1618:
case 733:
case 2563:
case 215:
case 2352:
case 1934:
case 1260:
case 2497:
case 483:
case 4078:
case 919:
case 2346:
case 650:
case 3588:
case 2586:
case 3348:
case 2211:
case 907:
case 203:
case 8:
case 2878:
case 2299:
case 1356:
case 3459:
case 3612:
case 3908:
case 1061:
case 404:
case 885:
case 2990:
case 2233:
case 1272:
case 1965:
case 447:
case 1755:
case 3043:
case 1582:
case 2690:
case 1335:
case 2606:
case 350:
case 3473:
case 1665:
case 814:
case 2749:
case 545:
case 3820:
case 1736:
case 324:
case 1051:
case 678:
case 2344:
case 1955:
case 2706:
case 848:
case 2370:
case 2790:
case 3434:
case 3561:
case 886:
case 2813:
case 399:
case 3469:
case 186:
case 3402:
case 1366:
case 3889:
case 148:
case 2305:
case 1636:
case 2949:
case 546:
case 800:
case 588:
case 369:
case 2596:
case 3712:
case 1383:
case 100:
case 3082:
case 1655:
case 2274:
case 2416:
case 2487:
case 433:
case 3963:
case 466:
case 3994:
case 1641:
case 1864:
case 1277:
case 1080:
case 1484:
case 552:
case 1710:
case 2059:
case 2688:
case 234:
case 539:
case 577:
case 3686:
case 1839:
case 3399:
case 2988:
case 3779:
case 1400:
case 3421:
case 227:
case 3986:
case 2073:
case 3158:
case 475:
case 1941:
case 1347:
case 3694:
case 1045:
case 2443:
case 3191:
case 1822:
case 702:
case 2183:
case 1910:
case 2002:
case 3679:
case 2069:
case 3119:
case 98:
case 3407:
case 4070:
case 2430:
case 3794:
case 2034:
case 465:
case 72:
case 1219:
case 3763:
case 51:
case 3226:
case 1291:
case 981:
case 476:
case 3016:
case 3168:
case 3653:
case 2018:
case 2166:
case 1029:
case 1105:
case 3244:
case 2809:
case 3385:
case 4026:
case 1144:
case 3205:
case 1268:
case 3504:
case 567:
case 721:
case 4023:
case 1728:
case 811:
case 3783:
case 867:
case 111:
case 3656:
case 3013:
case 2089:
case 422:
case 2163:
case 2501:
case 3766:
case 2768:
case 197:
case 3365:
case 2882:
case 3635:
case 1123:
case 2409:
case 2186:
case 941:
case 897:
case 610:
case 11:
case 478:
case 1308:
case 2677:
case 3336:
case 2210:
case 3666:
case 2076:
case 256:
case 1439:
case 3448:
case 2446:
case 3078:
case 2668:
case 2338:
case 2527:
case 1928:
case 1464:
case 1531:
case 2095:
case 3742:
case 2397:
case 2777:
case 468:
case 3983:
case 990:
case 1567:
case 647:
case 2619:
case 3355:
case 2691:
case 152:
case 960:
case 839:
case 877:
case 743:
case 3683:
case 3966:
case 177:
case 139:
case 2758:
case 1896:
case 2424:
case 2323:
case 3802:
case 3869:
case 1911:
case 1317:
case 3106:
case 2108:
case 1999:
case 2431:
case 3581:
case 2564:
case 846:
case 2593:
case 769:
case 3834:
case 1785:
case 695:
case 2972:
case 2265:
case 1206:
case 676:
case 2816:
case 2112:
case 2887:
case 799:
case 3647:
case 1611:
case 1225:
case 586:
case 2703:
case 548:
case 1114:
case 514:
case 1985:
case 845:
case 487:
case 3495:
case 2772:
case 675:
case 4038:
case 724:
case 696:
case 3859:
case 145:
case 3046:
case 2048:
case 1379:
case 3214:
case 750:
case 2603:
case 1401:
case 3310:
case 2903:
case 5:
case 3297:
case 779:
case 737:
case 1940:
case 2457:
case 1974:
case 3052:
case 666:
case 633:
case 915:
case 2460:
case 3081:
case 2064:
case 2880:
case 2093:
case 1495:
case 3733:
case 435:
case 689:
case 3985:
case 1214:
case 1476:
case 3379:
case 2039:
case 1859:
case 1046:
case 345:
case 714:
case 274:
case 2804:
case 1238:
case 7:
case 925:
case 3401:
case 579:
case 2845:
case 785:
case 1149:
case 3562:
case 3685:
case 1297:
case 3999:
case 2388:
case 3427:
case 3546:
case 2022:
case 388:
case 346:
case 1802:
case 1190:
case 3386:
case 436:
case 4025:
case 463:
case 2208:
case 3785:
case 493:
case 3633:
case 786:
case 1125:
case 1062:
case 1271:
case 3740:
case 3552:
case 3524:
case 2212:
case 3171:
case 926:
case 4090:
case 3611:
case 3225:
case 4006:
case 3513:
case 3439:
case 2589:
case 1983:
case 2110:
case 2926:
case 1742:
case 1550:
case 3884:
case 1735:
case 3493:
case 2481:
case 3060:
case 2670:
case 3531:
case 2944:
case 3875:
case 1057:
case 3628:
case 3896:
case 1821:
case 909:
case 451:
case 1966:
case 2898:
case 2905:
case 121:
case 2595:
case 2726:
case 3050:
case 3728:
case 2263:
case 2294:
case 367:
case 821:
case 3422:
case 2415:
case 1656:
case 3312:
case 2027:
case 397:
case 2141:
case 1223:
case 3288:
case 802:
case 620:
case 1956:
case 2520:
case 638:
case 3308:
case 2744:
case 1642:
case 280:
case 2770:
case 102:
case 2306:
case 1635:
case 82:
case 1407:
case 2559:
case 71:
case 3910:
case 52:
case 1191:
case 3822:
case 208:
case 2303:
case 3291:
case 2283:
case 1226:
case 1794:
case 1374:
case 2573:
case 1244:
case 767:
case 521:
case 663:
case 3170:
case 1979:
case 2461:
case 843:
case 3277:
case 777:
case 3641:
case 143:
case 1848:
case 1686:
case 752:
case 2502:
case 1617:
case 2569:
case 26:
case 3710:
case 2923:
case 1986:
case 2498:
case 3496:
case 4077:
case 1779:
case 1399:
case 1421:
case 3400:
case 2437:
case 261:
case 3045:
case 635:
case 1529:
case 1694:
case 3032:
case 3347:
case 1434:
case 1030:
case 3765:
case 3955:
case 1708:
case 2850:
case 438:
case 3366:
case 348:
case 1469:
case 2185:
case 420:
case 386:
case 3827:
case 3203:
case 1598:
case 2614:
case 2521:
case 2938:
case 2319:
case 612:
case 3655:
case 2771:
case 1082:
case 2391:
case 300:
case 746:
case 385:
case 2714:
case 1612:
case 1459:
case 651:
case 2133:
case 179:
case 3965:
case 3272:
case 992:
case 879:
case 2084:
case 3530:
case 150:
case 3335:
case 2075:
case 65:
case 2432:
case 824:
case 1043:
case 3342:
case 2971:
case 2377:
case 1912:
case 2404:
case 850:
case 3801:
case 2096:
case 4072:
case 3902:
case 3969:
case 198:
case 974:
case 6:
case 1278:
case 1160:
case 3178:
case 351:
case 898:
case 1455:
case 477:
case 3260:
case 2687:
case 3934:
case 3847:
case 3393:
case 2120:
case 3773:
case 868:
case 1092:
case 2381:
case 2987:
case 789:
case 3602:
case 3339:
case 1436:
case 168:
case 1588:
case 35:
case 2201:
case 3734:
case 1885:
case 2189:
case 2406:
case 3250:
case 3673:
case 497:
case 1465:
case 3408:
case 994:
case 801:
case 2510:
case 226:
case 2315:
case 3659:
case 1023:
case 312:
case 2017:
case 595:
case 80:
case 3973:
case 2716:
case 411:
case 1590:
case 1784:
case 2682:
case 2565:
case 209:
case 373:
case 3907:
case 1246:
case 1014:
case 504:
case 3152:
case 1224:
case 905:
case 3049:
case 4081:
case 1525:
case 1700:
case 3479:
case 1097:
case 887:
case 445:
case 1252:
case 1775:
case 393:
case 3621:
case 1696:
case 510:
case 2819:
case 2643:
case 2555:
case 2008:
case 1115:
case 3463:
case 2254:
case 3090:
case 2730:
case 2943:
case 2782:
case 446:
case 3597:
case 488:
case 1389:
case 3417:
case 3866:
case 363:
case 3025:
case 336:
case 3162:
case 1900:
case 1549:
case 3538:
case 2488:
case 2329:
case 1572:
case 611:
case 763:
case 3483:
case 2533:
case 2652:
case 667:
case 1230:
case 3130:
case 2946:
case 2599:
case 2624:
case 1151:
case 400:
case 1939:
case 2888:
case 2468:
case 3182:
case 338:
case 3003:
case 110:
case 3648:
case 1369:
case 486:
case 793:
case 1841:
case 971:
case 2952:
case 697:
case 810:
case 2709:
case 2762:
case 1334:
case 1922:
case 99:
case 4037:
case 414:
case 961:
case 2284:
case 3442:
case 1793:
case 1373:
case 2585:
case 3072:
case 1764:
case 2332:
case 2609:
case 917:
case 847:
case 485:
case 677:
case 2909:
case 2540:
case 639:
case 2962:
case 1654:
case 2458:
case 1622:
case 3298:
case 147:
case 1359:
case 3143:
case 652:
case 2296:
case 1137:
case 1727:
case 50:
case 3789:
case 2978:
case 1601:
case 2134:
case 522:
case 1577:
case 230:
case 895:
case 1485:
case 3091:
case 1865:
case 2731:
case 272:
case 3229:
case 865:
case 2351:
case 501:
case 1558:
case 2825:
case 3676:
case 953:
case 2066:
case 2403:
case 1005:
case 3920:
case 1307:
case 3116:
case 3812:
case 3187:
case 1591:
case 3375:
case 3795:
case 3526:
case 262:
case 2042:
case 1519:
case 2337:
case 2528:
case 3077:
case 2667:
case 875:
case 2159:
case 3280:
case 1180:
case 2913:
case 3300:
case 1321:
case 389:
case 1499:
case 175:
case 3989:
case 1411:
case 2849:
case 3204:
case 1627:
case 1145:
case 4080:
case 166:
case 1132:
case 1701:
case 1836:
case 2173:
case 3570:
case 2361:
case 3245:
case 1104:
case 866:
case 833:
case 592:
case 4020:
case 603:
case 3352:
case 315:
case 1616:
case 2455:
case 744:
case 1176:
case 3780:
case 3563:
case 1872:
case 298:
case 3414:
case 3010:
case 2160:
case 2278:
case 1195:
case 3586:
case 3517:
case 2348:
case 3704:
case 1201:
case 3220:
case 384:
case 2588:
case 2092:
case 1381:
case 1916:
case 1120:
case 3101:
case 1541:
case 3929:
case 3497:
case 2257:
case 3604:
case 1227:
case 126:
case 2150:
case 1063:
case 1189:
case 1406:
case 2885:
case 3309:
case 3127:
case 2231:
case 3553:
case 826:
case 3980:
case 2840:
case 3932:
case 3041:
case 455:
case 2267:
case 3680:
case 3729:
case 20:
case 3904:
case 528:
case 1315:
case 1017:
case 3579:
case 1803:
case 2246:
case 2320:
case 3193:
case 2181:
case 2410:
case 2014:
case 1239:
case 3248:
case 3139:
case 1565:
case 3357:
case 1930:
case 1293:
case 3508:
case 390:
case 3651:
case 4048:
case 723:
case 2775:
case 2395:
case 627:
case 2252:
case 1630:
case 2038:
case 3798:
case 983:
case 2796:
case 2376:
case 1858:
case 3036:
case 3961:
case 3751:
case 3367:
case 341:
case 1643:
case 78:
case 3826:
case 332:
case 3065:
case 2675:
case 3154:
case 442:
case 1222:
case 431:
case 359:
case 92:
case 3423:
case 3805:
case 2389:
case 2996:
case 1488:
case 1012:
case 2684:
case 3661:
case 3937:
case 3870:
case 370:
case 2441:
case 2209:
case 1624:
case 2722:
case 3207:
case 1946:
case 3715:
case 2151:
case 3547:
case 1491:
case 655:
case 2230:
case 1107:
case 3316:
case 2993:
case 74:
case 3387:
case 1652:
case 2428:
case 3981:
case 2754:
case 2282:
case 3040:
case 759:
case 1762:
case 3681:
case 2334:
case 3470:
case 4007:
case 3074:
case 1952:
case 38:
case 1888:
case 1646:
case 2369:
case 210:
case 2302:
case 3823:
case 3405:
case 4021:
case 1477:
case 1609:
case 3781:
case 1585:
case 2373:
case 790:
case 323:
case 2161:
case 3184:
case 2739:
case 1304:
case 943:
case 247:
case 2503:
case 3175:
case 509:
case 1458:
case 3615:
case 1200:
case 2359:
case 3196:
case 2243:
case 1380:
case 3100:
case 1121:
case 1909:
case 403:
case 2577:
case 3750:
case 1806:
case 1731:
case 63:
case 3535:
case 4018:
case 128:
case 1134:
case 295:
case 830:
case 969:
case 2601:
case 1403:
case 2005:
case 2129:
case 872:
case 1066:
case 157:
case 2558:
case 999:
case 526:
case 2307:
case 642:
case 2216:
case 3330:
case 2474:
case 2070:
case 3660:
case 172:
case 2440:
case 1351:
case 1767:
case 3218:
case 924:
case 2499:
case 862:
case 3259:
case 1778:
case 1398:
case 4073:
case 619:
case 275:
case 950:
case 2433:
case 1035:
case 2591:
case 1159:
case 3343:
case 458:
case 3897:
case 192:
case 434:
case 1361:
case 4059:
case 715:
case 2627:
case 1056:
case 3838:
case 1613:
case 344:
case 892:
case 1849:
case 2701:
case 1173:
case 979:
case 3566:
case 307:
case 1039:
case 3048:
case 3522:
case 2214:
case 2476:
case 3478:
case 129:
case 2515:
case 2859:
case 2495:
case 3255:
case 1064:
case 3392:
case 3772:
case 829:
case 2149:
case 607:
case 2052:
case 1832:
case 2297:
case 703:
case 644:
case 1136:
case 2310:
case 3903:
case 174:
case 2238:
case 4055:
case 2947:
case 1450:
case 3265:
case 3972:
case 864:
case 3564:
case 44:
case 2581:
case 2834:
case 164:
case 3413:
case 618:
case 3108:
case 90:
case 2869:
case 2190:
case 1022:
case 1548:
case 3672:
case 2062:
case 342:
case 1829:
case 3816:
case 3467:
case 2271:
case 331:
case 3777:
case 727:
case 3991:
case 561:
case 1926:
case 1670:
case 3919:
case 1253:
case 1861:
case 517:
case 2735:
case 3446:
case 3668:
case 3076:
case 59:
case 987:
case 1589:
case 56:
case 1898:
case 3314:
case 2057:
case 591:
case 1944:
case 2683:
case 758:
case 3619:
case 1970:
case 3163:
case 3658:
case 3089:
case 1325:
case 106:
case 681:
case 1027:
case 2807:
case 1415:
case 2656:
case 57:
case 806:
case 1595:
case 1726:
case 3830:
case 2783:
case 3977:
case 2031:
case 540:
case 3371:
case 2942:
case 1294:
case 1263:
case 3719:
case 2188:
case 571:
case 2642:
case 2067:
case 3677:
case 1744:
case 2635:
case 3117:
case 1306:
case 202:
case 3882:
case 2365:
case 3186:
case 1390:
case 1770:
case 1286:
case 1217:
case 508:
case 1520:
case 2956:
case 1705:
case 2766:
case 2340:
case 1692:
case 2794:
case 3430:
case 580:
case 2119:
case 2407:
case 632:
case 2191:
case 108:
case 1303:
case 840:
case 4028:
case 1266:
case 3788:
case 2532:
case 3018:
case 2385:
case 140:
case 3809:
case 64:
case 2653:
case 755:
case 2016:
case 3135:
case 1623:
case 2848:
case 358:
case 3846:
case 660:
case 3688:
case 3059:
case 904:
case 444:
case 1242:
case 1881:
case 2963:
case 2753:
case 3443:
case 161:
case 756:
case 2694:
case 89:
case 2529:
case 505:
case 2917:
case 2311:
case 19:
case 1256:
case 2779:
case 690:
case 2399:
case 3988:
case 3824:
case 594:
case 1185:
case 2402:
case 153:
case 3813:
case 1638:
case 731:
case 616:
case 965:
case 299:
case 3790:
case 3370:
case 3867:
case 3416:
case 3274:
case 1319:
case 73:
case 3575:
case 3240:
case 1997:
case 1771:
case 382:
case 2082:
case 2103:
case 564:
case 1938:
case 1521:
case 3949:
case 3596:
case 1174:
case 976:
case 2551:
case 1247:
case 3906:
case 2895:
case 1480:
case 1084:
case 1860:
case 3299:
case 1507:
case 2459:
case 3147:
case 933:
case 2172:
case 3211:
case 2876:
case 1404:
case 224:
case 3021:
case 3925:
case 996:
case 1738:
case 3690:
case 1432:
case 3857:
case 250:
case 1377:
case 2608:
case 1797:
case 1971:
case 2043:
case 1445:
case 803:
case 3199:
case 3480:
case 2530:
case 3084:
case 774:
case 2272:
case 625:
case 3111:
case 1233:
case 3358:
case 103:
case 1211:
case 3507:
case 3714:
case 1299:
case 1878:
case 413:
case 1925:
case 989:
case 2801:
case 3445:
case 3797:
case 3971:
case 2342:
case 1857:
case 519:
case 1606:
case 1690:
case 2582:
case 3432:
case 3368:
case 1007:
case 1649:
case 248:
case 1305:
case 3914:
case 2051:
case 1344:
case 1584:
case 1370:
case 1706:
case 626:
case 3997:
case 2383:
case 1240:
case 1867:
case 1596:
case 3174:
case 3938:
case 1500:
case 3521:
case 3614:
case 134:
case 1142:
case 36:
case 2839:
case 3623:
case 158:
case 1135:
case 3502:
case 2641:
case 609:
case 834:
case 2484:
case 3534:
case 3461:
case 2080:
case 2864:
case 2277:
case 3881:
case 3242:
case 4056:
case 858:
case 391:
case 2032:
case 1073:
case 2475:
case 1156:
case 2587:
case 827:
case 2045:
case 2516:
case 705:
case 361:
case 1852:
case 2496:
case 3256:
case 39:
case 2004:
case 2258:
case 462:
case 3498:
case 127:
case 1228:
case 3692:
case 1430:
case 4066:
case 457:
case 2854:
case 2126:
case 1183:
case 2910:
case 3303:
case 308:
case 3559:
case 472:
case 2610:
case 1788:
case 430:
case 2144:
case 2170:
case 2741:
case 1862:
case 706:
case 1809:
case 1482:
case 155:
case 3027:
case 211:
case 2312:
case 963:
case 267:
case 3325:
case 740:
case 1194:
case 936:
case 2422:
case 1163:
case 3263:
case 4017:
case 1719:
case 1791:
case 1830:
case 3726:
case 3595:
case 1409:
case 1186:
case 2557:
case 426:
case 3770:
case 2123:
case 1882:
case 21:
case 3705:
case 2288:
case 4063:
case 993:
case 297:
case 3286:
case 4094:
case 1768:
case 856:
case 2493:
case 2531:
case 2060:
case 2464:
case 79:
case 3926:
case 4079:
case 3644:
case 1397:
case 1777:
case 1991:
case 2439:
case 1076:
case 1210:
case 1153:
case 3349:
case 1668:
case 613:
case 527:
case 761:
case 534:
case 3905:
case 3279:
case 3898:
case 1424:
case 1968:
case 558:
case 1020:
case 4053:
case 2192:
case 973:
case 2800:
case 3837:
case 1452:
case 2628:
case 1619:
case 76:
case 1843:
case 2567:
case 252:
case 2875:
case 2785:
case 1564:
case 2933:
case 2206:
case 2317:
case 2911:
case 3548:
case 288:
case 1323:
case 246:
case 13:
case 2999:
case 1413:
case 2546:
case 2015:
case 1108:
case 2225:
case 2611:
case 842:
case 394:
case 3212:
case 1112:
case 131:
case 1467:
case 2740:
case 142:
case 2774:
case 245:
case 1478:
case 3155:
case 2711:
case 1603:
case 1048:
case 2799:
case 2640:
case 2114:
case 1772:
case 2081:
case 119:
case 3460:
case 3093:
case 3136:
case 3832:
case 2353:
case 2249:
case 2401:
case 584:
case 3398:
case 2989:
case 3778:
case 2776:
case 2300:
case 3931:
case 3667:
case 2280:
case 1343:
case 3159:
case 3472:
case 1760:
case 3035:
case 629:
case 2245:
case 46:
case 3361:
case 674:
case 3967:
case 2384:
case 9:
case 515:
case 844:
case 1897:
case 2232:
case 392:
case 107:
case 1566:
case 2689:
case 2058:
case 491:
case 144:
case 1838:
case 3613:
case 3056:
case 900:
case 1535:
case 3102:
case 3731:
case 664:
case 3806:
case 47:
case 3657:
case 2091:
case 2019:
case 2620:
case 328:
case 2976:
case 1269:
case 2068:
case 3678:
case 2920:
case 2187:
case 3825:
case 986:
case 471:
case 3118:
case 2676:
case 948:
case 2229:
case 694:
case 3351:
case 1871:
case 2695:
case 1330:
case 1033:
case 605:
case 3345:
case 3284:
case 3477:
case 1099:
case 3304:
case 1915:
case 1011:
case 4075:
case 2456:
case 3200:
case 1221:
case 3724:
case 2879:
case 3540:
case 709:
case 3121:
case 1100:
case 3380:
case 560:
case 54:
case 1715:
case 3511:
case 2948:
case 881:
case 2130:
case 3599:
case 3652:
case 1387:
case 3419:
case 181:
case 1981:
case 3107:
case 2863:
case 570:
case 3329:
case 3533:
case 1085:
case 2251:
case 1470:
case 3762:
case 238:
case 2886:
case 680:
case 3924:
case 2006:
case 859:
case 132:
case 3891:
case 1826:
case 2494:
case 2090:
case 3555:
case 3643:
case 3819:
case 91:
case 1961:
case 1637:
case 1751:
case 2215:
case 671:
case 159:
case 1698:
case 2514:
case 58:
case 997:
case 1154:
case 2538:
case 911:
case 3012:
case 14:
case 2921:
case 1313:
case 236:
case 2162:
case 2486:
case 2109:
case 3536:
case 967:
case 1844:
case 2597:
case 84:
case 3350:
case 67:
case 3943:
case 1870:
case 464:
case 1331:
case 3782:
case 1661:
case 1937:
case 1248:
case 1164:
case 273:
case 309:
case 2907:
case 1193:
case 3930:
case 1508:
case 3293:
case 2842:
case 1761:
case 3682:
case 1357:
case 2835:
case 3565:
case 66:
case 3360:
case 3630:
case 2571:
case 3858:
case 2721:
case 4093:
case 235:
case 2152:
case 617:
case 4064:
case 2607:
case 1378:
case 480:
case 326:
case 816:
case 2702:
case 653:
case 2113:
case 1127:
case 1362:
case 116:
case 2734:
case 3490:
case 1309:
case 1632:
case 757:
case 2250:
case 3406:
case 1680:
case 1471:
case 2718:
case 518:
case 1041:
case 2973:
case 946:
case 3086:
case 3017:
case 3803:
case 1579:
case 2322:
case 3315:
case 2167:
case 2659:
case 2412:
case 2088:
case 2847:
case 3872:
case 1629:
case 2618:
case 1594:
case 2260:
case 3053:
case 251:
case 2178:
case 3616:
case 1352:
case 115:
case 325:
case 1414:
case 2969:
case 2902:
case 544:
case 792:
case 3449:
case 1438:
case 2339:
case 2669:
case 762:
case 2523:
case 1745:
case 1497:
case 3541:
case 2918:
case 405:
case 3916:
case 2393:
case 3120:
case 2364:
case 3987:
case 1732:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757156401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,];
var gg_b = "1757156401/";

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
