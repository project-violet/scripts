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
case 3329:
case 3106:
case 790:
case 1499:
case 96:
case 2616:
case 314:
case 1310:
case 709:
case 3182:
case 848:
case 2469:
case 217:
case 3455:
case 4094:
case 3061:
case 3001:
case 2791:
case 919:
case 757:
case 3991:
case 225:
case 3262:
case 98:
case 2816:
case 2881:
case 1343:
case 2417:
case 3051:
case 830:
case 836:
case 1751:
case 201:
case 2335:
case 2871:
case 4023:
case 2132:
case 4010:
case 758:
case 191:
case 220:
case 2325:
case 3252:
case 4033:
case 2122:
case 2142:
case 795:
case 39:
case 4043:
case 2364:
case 2304:
case 2236:
case 218:
case 3821:
case 3172:
case 1346:
case 1225:
case 2048:
case 1778:
case 1235:
case 2640:
case 624:
case 1580:
case 2858:
case 511:
case 1289:
case 3515:
case 1117:
case 3078:
case 3870:
case 2294:
case 937:
case 3714:
case 2620:
case 2038:
case 508:
case 622:
case 2914:
case 1264:
case 2987:
case 405:
case 2658:
case 2630:
case 1087:
case 2028:
case 623:
case 2613:
case 3598:
case 2050:
case 3163:
case 1326:
case 1169:
case 938:
case 1090:
case 3777:
case 499:
case 2990:
case 2608:
case 2668:
case 400:
case 406:
case 148:
case 4046:
case 1900:
case 1077:
case 2223:
case 2060:
case 1159:
case 421:
case 507:
case 1615:
case 1788:
case 2808:
case 2507:
case 2737:
case 1432:
case 3088:
case 1898:
case 945:
case 3680:
case 1279:
case 559:
case 799:
case 3463:
case 3403:
case 2499:
case 1681:
case 431:
case 4025:
case 700:
case 2701:
case 2531:
case 2761:
case 916:
case 910:
case 541:
case 125:
case 3912:
case 3091:
case 1881:
case 4064:
case 2343:
case 1379:
case 1791:
case 1474:
case 101:
case 915:
case 783:
case 634:
case 1132:
case 764:
case 1246:
case 1325:
case 120:
case 3495:
case 1122:
case 4054:
case 229:
case 371:
case 3951:
case 4079:
case 3581:
case 927:
case 3418:
case 3453:
case 784:
case 1345:
case 633:
case 762:
case 30:
case 705:
case 632:
case 1364:
case 1671:
case 3978:
case 2117:
case 826:
case 1830:
case 2346:
case 230:
case 3352:
case 1813:
case 1048:
case 2778:
case 1820:
case 949:
case 2948:
case 1557:
case 2235:
case 2580:
case 2950:
case 1620:
case 2264:
case 1914:
case 1987:
case 2245:
case 2014:
case 1028:
case 1050:
case 598:
case 2109:
case 2938:
case 3568:
case 3738:
case 3508:
case 3406:
case 1199:
case 3728:
case 1294:
case 1233:
case 2254:
case 3239:
case 3124:
case 597:
case 1608:
case 2960:
case 248:
case 2900:
case 1977:
case 1223:
case 1060:
case 2815:
case 3134:
case 1747:
case 490:
case 2090:
case 3558:
case 2442:
case 1519:
case 2698:
case 409:
case 3285:
case 3760:
case 3530:
case 2898:
case 3311:
case 3386:
case 2174:
case 2422:
case 3540:
case 2279:
case 3657:
case 3988:
case 2615:
case 3165:
case 3105:
case 556:
case 550:
case 3249:
case 1243:
case 2788:
case 457:
case 1868:
case 1808:
case 572:
case 1737:
case 3144:
case 436:
case 726:
case 1666:
case 701:
case 183:
case 537:
case 1390:
case 1682:
case 908:
case 2542:
case 3458:
case 3430:
case 2696:
case 2497:
case 2762:
case 375:
case 3092:
case 77:
case 1882:
case 718:
case 3986:
case 3440:
case 2711:
case 2786:
case 3291:
case 2470:
case 163:
case 1467:
case 1806:
case 1792:
case 4087:
case 199:
case 2752:
case 353:
case 376:
case 370:
case 1131:
case 717:
case 4090:
case 209:
case 1121:
case 3378:
case 106:
case 2348:
case 2480:
case 2338:
case 2926:
case 538:
case 1036:
case 435:
case 1387:
case 1314:
case 2350:
case 1026:
case 32:
case 1141:
case 3506:
case 354:
case 3726:
case 1672:
case 907:
case 3809:
case 1925:
case 1574:
case 1197:
case 1935:
case 677:
case 3595:
case 1248:
case 1170:
case 3983:
case 800:
case 806:
case 3351:
case 58:
case 821:
case 3617:
case 2107:
case 2167:
case 3518:
case 3481:
case 3416:
case 3817:
case 1094:
case 3553:
case 1559:
case 2214:
case 2045:
case 1904:
case 1228:
case 1250:
case 1603:
case 1238:
case 2119:
case 2004:
case 2064:
case 1945:
case 739:
case 3247:
case 1729:
case 882:
case 2290:
case 3710:
case 3471:
case 1509:
case 883:
case 1023:
case 3029:
case 2844:
case 1785:
case 2933:
case 2441:
case 2599:
case 1618:
case 2054:
case 491:
case 1010:
case 2923:
case 2634:
case 3659:
case 1653:
case 2943:
case 2834:
case 3859:
case 1853:
case 2605:
case 2665:
case 61:
case 3115:
case 2644:
case 2824:
case 3049:
case 1818:
case 3674:
case 689:
case 2079:
case 3973:
case 884:
case 3743:
case 1695:
case 862:
case 2682:
case 2390:
case 1542:
case 367:
case 439:
case 2419:
case 729:
case 1696:
case 4048:
case 158:
case 791:
case 282:
case 2377:
case 3181:
case 2666:
case 1360:
case 1300:
case 205:
case 3062:
case 3002:
case 1786:
case 4038:
case 263:
case 2467:
case 4050:
case 195:
case 2806:
case 1497:
case 1532:
case 1702:
case 3337:
case 3261:
case 3632:
case 200:
case 206:
case 1348:
case 1480:
case 2457:
case 1776:
case 4060:
case 1946:
case 4000:
case 299:
case 1752:
case 2872:
case 2131:
case 973:
case 956:
case 3076:
case 2121:
case 972:
case 3251:
case 1338:
case 2656:
case 1926:
case 2036:
case 3171:
case 2387:
case 3596:
case 2314:
case 3832:
case 1936:
case 3498:
case 1350:
case 157:
case 2026:
case 2170:
case 3735:
case 3565:
case 510:
case 516:
case 2989:
case 3278:
case 1089:
case 1893:
case 890:
case 896:
case 1167:
case 1107:
case 131:
case 1655:
case 604:
case 2197:
case 2935:
case 1025:
case 685:
case 1783:
case 2248:
case 3158:
case 2904:
case 1214:
case 2228:
case 2250:
case 3120:
case 735:
case 2603:
case 602:
case 528:
case 1004:
case 2775:
case 425:
case 1693:
case 3524:
case 3975:
case 3745:
case 1994:
case 2559:
case 3534:
case 857:
case 2023:
case 1910:
case 1844:
case 2200:
case 2260:
case 660:
case 666:
case 2785:
case 3168:
case 3108:
case 3939:
case 2954:
case 1599:
case 1054:
case 426:
case 420:
case 1865:
case 2653:
case 3929:
case 1277:
case 858:
case 2895:
case 2729:
case 1290:
case 3754:
case 515:
case 3073:
case 418:
case 1079:
case 3555:
case 2979:
case 2695:
case 2180:
case 3949:
case 3779:
case 1773:
case 1431:
case 1834:
case 2853:
case 1644:
case 2517:
case 2584:
case 1824:
case 2818:
case 1720:
case 2878:
case 86:
case 2577:
case 1560:
case 1500:
case 3719:
case 741:
case 3058:
case 2590:
case 1145:
case 1342:
case 3638:
case 3203:
case 3263:
case 1269:
case 948:
case 2919:
case 3020:
case 3848:
case 459:
case 3013:
case 1019:
case 612:
case 1164:
case 3547:
case 1104:
case 3648:
case 599:
case 3527:
case 614:
case 2097:
case 3707:
case 3537:
case 3767:
case 3040:
case 1125:
case 3838:
case 3492:
case 1322:
case 1284:
case 2907:
case 506:
case 500:
case 145:
case 2678:
case 1740:
case 1970:
case 936:
case 3757:
case 146:
case 140:
case 1980:
case 563:
case 1446:
case 3173:
case 2688:
case 1548:
case 2957:
case 564:
case 1708:
case 1837:
case 3396:
case 1647:
case 1550:
case 137:
case 4032:
case 3253:
case 3008:
case 2133:
case 1154:
case 947:
case 2110:
case 3660:
case 2435:
case 3:
case 2601:
case 3111:
case 2374:
case 798:
case 215:
case 840:
case 846:
case 3102:
case 3365:
case 2612:
case 323:
case 1691:
case 2489:
case 3344:
case 3324:
case 1891:
case 3266:
case 3206:
case 324:
case 755:
case 2404:
case 2861:
case 2801:
case 3282:
case 16:
case 3485:
case 2242:
case 381:
case 772:
case 1423:
case 2851:
case 756:
case 3439:
case 2454:
case 1771:
case 2651:
case 797:
case 2384:
case 2317:
case 3449:
case 2479:
case 2146:
case 216:
case 845:
case 3355:
case 2222:
case 2232:
case 3356:
case 3913:
case 828:
case 3958:
case 3614:
case 2720:
case 1878:
case 450:
case 1194:
case 2560:
case 2500:
case 472:
case 557:
case 3293:
case 1299:
case 2217:
case 1967:
case 1907:
case 497:
case 245:
case 3402:
case 474:
case 2189:
case 3486:
case 3588:
case 2135:
case 3940:
case 3255:
case 2322:
case 240:
case 815:
case 2847:
case 1688:
case 2179:
case 2057:
case 595:
case 939:
case 333:
case 60:
case 3265:
case 3205:
case 149:
case 3476:
case 3149:
case 3578:
case 3306:
case 3366:
case 3677:
case 3234:
case 334:
case 2154:
case 3139:
case 1133:
case 3968:
case 3224:
case 1110:
case 2436:
case 558:
case 2768:
case 3185:
case 2837:
case 671:
case 3690:
case 2647:
case 2528:
case 1888:
case 2827:
case 237:
case 115:
case 3551:
case 4009:
case 3483:
case 926:
case 644:
case 251:
case 1435:
case 1661:
case 1374:
case 3192:
case 708:
case 3395:
case 3296:
case 97:
case 2781:
case 643:
case 4017:
case 1861:
case 4084:
case 3318:
case 3916:
case 711:
case 3353:
case 4074:
case 2423:
case 1851:
case 2410:
case 2941:
case 2433:
case 1454:
case 26:
case 759:
case 3971:
case 1242:
case 1309:
case 3363:
case 3731:
case 3501:
case 3721:
case 4059:
case 531:
case 2921:
case 1384:
case 1021:
case 2523:
case 3889:
case 1099:
case 1554:
case 2763:
case 2999:
case 3799:
case 3825:
case 1969:
case 3963:
case 749:
case 2187:
case 2114:
case 3664:
case 1150:
case 2009:
case 3864:
case 3635:
case 3055:
case 3625:
case 3845:
case 1297:
case 1755:
case 2331:
case 2207:
case 2875:
case 1270:
case 2084:
case 2017:
case 2543:
case 591:
case 3689:
case 1683:
case 3451:
case 3065:
case 3005:
case 46:
case 1589:
case 2649:
case 2795:
case 62:
case 3215:
case 3127:
case 3679:
case 2257:
case 1765:
case 1535:
case 241:
case 2074:
case 1280:
case 1744:
case 1974:
case 653:
case 676:
case 2685:
case 3298:
case 2718:
case 3879:
case 1734:
case 2753:
case 1564:
case 3381:
case 3953:
case 1959:
case 1100:
case 2059:
case 3918:
case 48:
case 3654:
case 2448:
case 1686:
case 1611:
case 999:
case 3552:
case 273:
case 438:
case 2380:
case 1602:
case 900:
case 3478:
case 3191:
case 159:
case 393:
case 3368:
case 377:
case 394:
case 710:
case 3906:
case 3966:
case 1796:
case 1862:
case 1802:
case 445:
case 297:
case 2438:
case 2766:
case 1886:
case 4067:
case 3982:
case 2428:
case 1414:
case 107:
case 2526:
case 982:
case 3320:
case 715:
case 3956:
case 1852:
case 2772:
case 3330:
case 108:
case 2756:
case 1876:
case 3742:
case 3972:
case 1241:
case 2460:
case 3732:
case 3502:
case 255:
case 530:
case 1221:
case 3722:
case 1676:
case 1231:
case 1307:
case 1652:
case 905:
case 3488:
case 2397:
case 3586:
case 3511:
case 963:
case 1032:
case 3340:
case 962:
case 2909:
case 3230:
case 1187:
case 3258:
case 2128:
case 898:
case 2150:
case 1009:
case 1069:
case 1341:
case 687:
case 1523:
case 3529:
case 2883:
case 2099:
case 1703:
case 1533:
case 2554:
case 3709:
case 1763:
case 3993:
case 740:
case 1510:
case 2755:
case 2917:
case 667:
case 1017:
case 1543:
case 526:
case 1321:
case 3240:
case 855:
case 2579:
case 2148:
case 3784:
case 2297:
case 1257:
case 2673:
case 2535:
case 2280:
case 141:
case 738:
case 2525:
case 3944:
case 931:
case 1839:
case 856:
case 850:
case 2589:
case 1649:
case 3643:
case 1829:
case 3905:
case 3965:
case 3018:
case 897:
case 874:
case 1177:
case 2959:
case 3575:
case 2100:
case 3208:
case 3268:
case 517:
case 2873:
case 2564:
case 2504:
case 688:
case 1753:
case 745:
case 841:
case 2662:
case 365:
case 3315:
case 76:
case 990:
case 2611:
case 1546:
case 3161:
case 3101:
case 156:
case 2357:
case 174:
case 197:
case 3996:
case 719:
case 1892:
case 3082:
case 2886:
case 2811:
case 1428:
case 2487:
case 1526:
case 3006:
case 304:
case 3281:
case 385:
case 2796:
case 2802:
case 2862:
case 208:
case 2477:
case 751:
case 3072:
case 1460:
case 3271:
case 3636:
case 2042:
case 2490:
case 3626:
case 386:
case 3447:
case 449:
case 3826:
case 3646:
case 2032:
case 1397:
case 3836:
case 1932:
case 3437:
case 3151:
case 2231:
case 2367:
case 2582:
case 904:
case 1642:
case 3926:
case 712:
case 3338:
case 3350:
case 1498:
case 3936:
case 1832:
case 168:
case 2408:
case 2736:
case 2506:
case 4037:
case 2726:
case 276:
case 253:
case 270:
case 1415:
case 1251:
case 2378:
case 309:
case 188:
case 252:
case 3348:
case 965:
case 1052:
case 903:
case 714:
case 3776:
case 179:
case 3480:
case 2952:
case 3896:
case 1011:
case 1086:
case 2388:
case 187:
case 3497:
case 2440:
case 2986:
case 3470:
case 3711:
case 3786:
case 966:
case 1062:
case 1002:
case 395:
case 2572:
case 3300:
case 3360:
case 986:
case 2556:
case 3542:
case 3696:
case 442:
case 2115:
case 3605:
case 3665:
case 3834:
case 3824:
case 1555:
case 3079:
case 2301:
case 2361:
case 2237:
case 698:
case 1288:
case 3157:
case 2973:
case 2227:
case 2723:
case 2247:
case 2503:
case 2563:
case 2471:
case 2874:
case 1985:
case 3290:
case 1593:
case 3599:
case 1939:
case 3933:
case 1168:
case 3634:
case 3923:
case 2659:
case 867:
case 2039:
case 1745:
case 1975:
case 656:
case 650:
case 2884:
case 2416:
case 2481:
case 3693:
case 2518:
case 1534:
case 1764:
case 2075:
case 3994:
case 13:
case 868:
case 3045:
case 3287:
case 1130:
case 4091:
case 3064:
case 1113:
case 2669:
case 3855:
case 3035:
case 3655:
case 331:
case 3783:
case 3025:
case 2595:
case 2351:
case 1565:
case 1735:
case 1505:
case 697:
case 674:
case 1544:
case 3107:
case 3167:
case 2617:
case 1725:
case 3893:
case 879:
case 3089:
case 154:
case 4088:
case 1408:
case 1468:
case 1736:
case 1506:
case 1566:
case 3141:
case 3036:
case 1582:
case 12:
case 3026:
case 2832:
case 3387:
case 992:
case 306:
case 300:
case 2632:
case 3457:
case 321:
case 2622:
case 1976:
case 3131:
case 3872:
case 153:
case 2415:
case 399:
case 3121:
case 288:
case 2076:
case 152:
case 363:
case 1291:
case 2062:
case 2002:
case 305:
case 70:
case 3866:
case 1962:
case 1902:
case 2212:
case 2011:
case 2086:
case 287:
case 2327:
case 1440:
case 2261:
case 2201:
case 1986:
case 2337:
case 1092:
case 969:
case 1458:
case 1556:
case 3419:
case 4078:
case 978:
case 3377:
case 2116:
case 2181:
case 364:
case 1572:
case 2555:
case 2073:
case 522:
case 1301:
case 1361:
case 1237:
case 1674:
case 3749:
case 1743:
case 2288:
case 1973:
case 3979:
case 1115:
case 1312:
case 3853:
case 3043:
case 3584:
case 2391:
case 3618:
case 2939:
case 2168:
case 3785:
case 3260:
case 3023:
case 611:
case 1659:
case 2929:
case 3653:
case 3729:
case 3895:
case 742:
case 4051:
case 3569:
case 3739:
case 2754:
case 1503:
case 1563:
case 524:
case 1198:
case 1710:
case 1874:
case 2120:
case 3250:
case 854:
case 413:
case 3228:
case 1794:
case 3964:
case 3904:
case 3775:
case 412:
case 3945:
case 2113:
case 1609:
case 3603:
case 4001:
case 4061:
case 2524:
case 1481:
case 1416:
case 2699:
case 82:
case 2534:
case 2704:
case 1553:
case 1075:
case 2278:
case 561:
case 1983:
case 607:
case 2544:
case 1617:
case 2899:
case 2083:
case 3197:
case 3863:
case 2789:
case 3248:
case 1595:
case 2140:
case 10:
case 3142:
case 3345:
case 3671:
case 3236:
case 3364:
case 649:
case 1418:
case 1581:
case 1516:
case 37:
case 775:
case 2831:
case 2375:
case 2051:
case 171:
case 2841:
case 1951:
case 3389:
case 1383:
case 843:
case 301:
case 3474:
case 842:
case 3122:
case 326:
case 3379:
case 1373:
case 2001:
case 1292:
case 2455:
case 1961:
case 72:
case 2012:
case 213:
case 3417:
case 3484:
case 3881:
case 3816:
case 1091:
case 212:
case 1912:
case 2262:
case 2202:
case 325:
case 3616:
case 3681:
case 2493:
case 54:
case 2329:
case 3354:
case 2339:
case 752:
case 317:
case 753:
case 3469:
case 1403:
case 3409:
case 1249:
case 1105:
case 3507:
case 3567:
case 3868:
case 3808:
case 1311:
case 2937:
case 2088:
case 468:
case 1988:
case 1657:
case 502:
case 1540:
case 1037:
case 504:
case 1857:
case 1456:
case 2777:
case 1558:
case 2947:
case 585:
case 3990:
case 488:
case 1513:
case 2790:
case 610:
case 616:
case 3608:
case 3668:
case 4052:
case 1124:
case 3233:
case 1239:
case 1134:
case 3977:
case 1193:
case 1466:
case 1738:
case 1508:
case 80:
case 4011:
case 144:
case 1807:
case 2787:
case 580:
case 3658:
case 4062:
case 934:
case 3914:
case 615:
case 3620:
case 2163:
case 3050:
case 3613:
case 2598:
case 3028:
case 2897:
case 3630:
case 3048:
case 1819:
case 871:
case 3830:
case 3640:
case 3557:
case 3820:
case 627:
case 2515:
case 143:
case 560:
case 566:
case 1978:
case 2283:
case 467:
case 2078:
case 339:
case 1607:
case 1641:
case 95:
case 2516:
case 640:
case 1821:
case 2453:
case 1831:
case 1375:
case 20:
case 924:
case 4049:
case 4029:
case 1252:
case 391:
case 1051:
case 1405:
case 1465:
case 1276:
case 1631:
case 9:
case 767:
case 2951:
case 1621:
case 1444:
case 961:
case 3343:
case 3521:
case 112:
case 1202:
case 2912:
case 2373:
case 638:
case 3712:
case 2292:
case 1286:
case 4075:
case 1211:
case 768:
case 1182:
case 1385:
case 788:
case 2571:
case 2196:
case 2403:
case 2463:
case 114:
case 779:
case 3499:
case 1493:
case 1329:
case 3323:
case 1106:
case 3310:
case 1339:
case 592:
case 3898:
case 3432:
case 813:
case 593:
case 2657:
case 1195:
case 812:
case 1392:
case 3570:
case 66:
case 2144:
case 73:
case 1790:
case 3077:
case 3960:
case 3900:
case 2124:
case 1118:
case 2239:
case 3254:
case 3159:
case 453:
case 470:
case 2857:
case 1777:
case 2456:
case 2558:
case 1947:
case 3090:
case 2760:
case 2530:
case 452:
case 2285:
case 619:
case 594:
case 3698:
case 577:
case 3928:
case 3336:
case 3204:
case 589:
case 1496:
case 3326:
case 3109:
case 2619:
case 347:
case 3014:
case 1897:
case 3087:
case 2193:
case 2406:
case 2466:
case 2568:
case 2508:
case 2738:
case 578:
case 244:
case 2275:
case 475:
case 1870:
case 2750:
case 3117:
case 2376:
case 2667:
case 2819:
case 1697:
case 3235:
case 3778:
case 2298:
case 804:
case 14:
case 3190:
case 3753:
case 1934:
case 2953:
case 3629:
case 1623:
case 3177:
case 93:
case 2316:
case 2024:
case 1018:
case 3639:
case 2654:
case 1633:
case 2918:
case 3059:
case 1053:
case 2034:
case 1575:
case 696:
case 3839:
case 2854:
case 1810:
case 2065:
case 1944:
case 1905:
case 2215:
case 3829:
case 1643:
case 3649:
case 2583:
case 341:
case 3074:
case 865:
case 2679:
case 3257:
case 803:
case 2127:
case 1095:
case 802:
case 571:
case 2461:
case 2401:
case 2804:
case 2864:
case 1240:
case 2845:
case 1717:
case 1955:
case 3875:
case 3207:
case 3267:
case 866:
case 3321:
case 1549:
case 3543:
case 3084:
case 2093:
case 50:
case 3341:
case 3510:
case 1993:
case 3703:
case 3533:
case 886:
case 2903:
case 2963:
case 1213:
case 3219:
case 2825:
case 3009:
case 1003:
case 695:
case 1258:
case 3187:
case 987:
case 355:
case 2562:
case 2502:
case 75:
case 269:
case 543:
case 2488:
case 160:
case 1826:
case 542:
case 2340:
case 1592:
case 1836:
case 21:
case 433:
case 723:
case 2358:
case 1271:
case 3942:
case 2330:
case 1846:
case 3772:
case 1447:
case 722:
case 186:
case 3756:
case 289:
case 3460:
case 2308:
case 84:
case 3782:
case 1066:
case 631:
case 1006:
case 761:
case 2906:
case 3706:
case 3892:
case 3438:
case 2096:
case 356:
case 350:
case 373:
case 1161:
case 1101:
case 3546:
case 3448:
case 3380:
case 372:
case 165:
case 2191:
case 2478:
case 979:
case 2934:
case 3959:
case 2623:
case 1316:
case 1381:
case 606:
case 2843:
case 1024:
case 2924:
case 2208:
case 1034:
case 621:
case 2575:
case 3724:
case 1298:
case 3545:
case 3734:
case 3504:
case 1879:
case 877:
case 894:
case 3765:
case 3535:
case 513:
case 3673:
case 3974:
case 1137:
case 3744:
case 2833:
case 2810:
case 1451:
case 2774:
case 1215:
case 1044:
case 2965:
case 2823:
case 2643:
case 3589:
case 481:
case 3984:
case 1412:
case 2178:
case 2491:
case 2894:
case 3270:
case 1461:
case 3579:
case 1573:
case 1635:
case 2240:
case 4081:
case 1845:
case 734:
case 2784:
case 683:
case 2955:
case 869:
case 1645:
case 2213:
case 1903:
case 3969:
case 1825:
case 732:
case 889:
case 1604:
case 3128:
case 733:
case 684:
case 1371:
case 2258:
case 1093:
case 878:
case 1889:
case 3883:
case 81:
case 4:
case 2694:
case 2529:
case 3554:
case 2539:
case 3032:
case 1511:
case 4068:
case 260:
case 3652:
case 311:
case 2826:
case 1340:
case 2151:
case 1562:
case 169:
case 1722:
case 3876:
case 3477:
case 2072:
case 1320:
case 11:
case 2056:
case 3042:
case 1330:
case 3852:
case 3319:
case 1313:
case 286:
case 2626:
case 954:
case 307:
case 3487:
case 1982:
case 1096:
case 2006:
case 2066:
case 3802:
case 285:
case 3796:
case 4040:
case 1966:
case 92:
case 2281:
case 194:
case 265:
case 3662:
case 4020:
case 4013:
case 359:
case 1576:
case 1191:
case 1478:
case 4030:
case 2101:
case 3611:
case 976:
case 953:
case 3357:
case 952:
case 1185:
case 2998:
case 2396:
case 3587:
case 3514:
case 1234:
case 1677:
case 601:
case 1366:
case 1306:
case 2660:
case 3798:
case 2218:
case 1968:
case 3133:
case 4056:
case 1578:
case 480:
case 486:
case 2757:
case 3143:
case 1149:
case 1877:
case 1205:
case 1265:
case 132:
case 2173:
case 3688:
case 618:
case 1452:
case 2295:
case 1890:
case 942:
case 4006:
case 4066:
case 1887:
case 1770:
case 2850:
case 1588:
case 2527:
case 1486:
case 1411:
case 2648:
case 2838:
case 2537:
case 2767:
case 485:
case 1462:
case 3967:
case 3907:
case 4082:
case 579:
case 3577:
case 1293:
case 1175:
case 2020:
case 2263:
case 2638:
case 1930:
case 2058:
case 2030:
case 2628:
case 402:
case 2013:
case 1920:
case 2848:
case 1512:
case 3021:
case 2591:
case 2449:
case 2176:
case 3384:
case 4018:
case 2355:
case 2152:
case 310:
case 316:
case 3479:
case 3146:
case 1561:
case 777:
case 3232:
case 1741:
case 793:
case 3136:
case 281:
case 3309:
case 1363:
case 2256:
case 2071:
case 53:
case 2272:
case 3041:
case 2439:
case 3454:
case 4095:
case 328:
case 2016:
case 90:
case 1318:
case 2475:
case 224:
case 3359:
case 2334:
case 1353:
case 3812:
case 1916:
case 2266:
case 2206:
case 3445:
case 327:
case 834:
case 1296:
case 2282:
case 3801:
case 3404:
case 3464:
case 2186:
case 3661:
case 971:
case 2:
case 3435:
case 833:
case 789:
case 1395:
case 1192:
case 1551:
case 2305:
case 2365:
case 2162:
case 315:
case 71:
case 2344:
case 1483:
case 3489:
case 4003:
case 234:
case 1008:
case 2234:
case 1253:
case 2129:
case 2366:
case 1660:
case 691:
case 2968:
case 2139:
case 2690:
case 2185:
case 629:
case 3708:
case 3538:
case 337:
case 3550:
case 824:
case 3528:
case 1396:
case 3179:
case 489:
case 2452:
case 340:
case 3980:
case 346:
case 3637:
case 2890:
case 1800:
case 1860:
case 2244:
case 478:
case 8:
case 2578:
case 1757:
case 2149:
case 2877:
case 232:
case 2402:
case 3217:
case 3284:
case 3970:
case 3067:
case 3007:
case 3740:
case 3189:
case 2814:
case 2940:
case 3332:
case 3135:
case 1850:
case 576:
case 570:
case 553:
case 1648:
case 2486:
case 3322:
case 2255:
case 1492:
case 552:
case 3997:
case 1537:
case 3269:
case 1203:
case 2930:
case 1058:
case 2687:
case 2614:
case 1547:
case 1013:
case 1848:
case 3758:
case 338:
case 52:
case 3713:
case 2372:
case 2175:
case 3730:
case 785:
case 1355:
case 648:
case 2473:
case 2731:
case 2561:
case 912:
case 319:
case 1449:
case 3443:
case 1176:
case 1393:
case 3423:
case 1439:
case 3433:
case 2741:
case 2971:
case 4005:
case 4065:
case 1485:
case 702:
case 181:
case 765:
case 1256:
case 703:
case 4044:
case 15:
case 3781:
case 1282:
case 1016:
case 1081:
case 636:
case 3891:
case 1324:
case 2318:
case 1475:
case 124:
case 766:
case 760:
case 2353:
case 99:
case 1266:
case 780:
case 1305:
case 1102:
case 1162:
case 1344:
case 2483:
case 3691:
case 647:
case 1186:
case 1:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758117602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,];
var gg_b = "1758117602/";

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
