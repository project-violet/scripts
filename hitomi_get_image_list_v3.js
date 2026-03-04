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
case 3976:
case 3836:
case 3020:
case 218:
case 3706:
case 2335:
case 966:
case 2004:
case 1803:
case 513:
case 2860:
case 836:
case 1733:
case 126:
case 1170:
case 2942:
case 2717:
case 3679:
case 3324:
case 2594:
case 722:
case 1446:
case 3888:
case 1882:
case 2355:
case 2218:
case 1814:
case 3418:
case 1037:
case 4078:
case 873:
case 3164:
case 2619:
case 3586:
case 880:
case 362:
case 2478:
case 1272:
case 3073:
case 3278:
case 783:
case 797:
case 3995:
case 770:
case 277:
case 696:
case 2729:
case 3031:
case 2691:
case 72:
case 2945:
case 1922:
case 3928:
case 1467:
case 484:
case 1780:
case 1500:
case 2426:
case 3226:
case 2563:
case 785:
case 169:
case 3193:
case 944:
case 4026:
case 1394:
case 758:
case 3051:
case 81:
case 2627:
case 595:
case 90:
case 225:
case 1981:
case 3827:
case 3964:
case 184:
case 3290:
case 63:
case 55:
case 351:
case 3399:
case 2067:
case 1805:
case 2529:
case 2142:
case 1830:
case 1970:
case 1026:
case 2562:
case 1700:
case 593:
case 2353:
case 1125:
case 2763:
case 3192:
case 1198:
case 2841:
case 298:
case 1755:
case 778:
case 469:
case 2457:
case 3577:
case 3257:
case 89:
case 1220:
case 282:
case 2289:
case 888:
case 1674:
case 3993:
case 1329:
case 1533:
case 855:
case 2879:
case 2688:
case 306:
case 3738:
case 1732:
case 2943:
case 1549:
case 552:
case 632:
case 3128:
case 1883:
case 1122:
case 2145:
case 2012:
case 2371:
case 3237:
case 3368:
case 1362:
case 534:
case 1821:
case 1553:
case 3195:
case 2959:
case 853:
case 717:
case 3182:
case 708:
case 529:
case 1188:
case 1055:
case 299:
case 3775:
case 3271:
case 1313:
case 3114:
case 779:
case 1156:
case 2471:
case 2669:
case 3551:
case 2063:
case 1927:
case 3950:
case 2601:
case 1462:
case 1000:
case 2174:
case 4071:
case 1726:
case 3280:
case 2357:
case 1590:
case 2480:
case 1136:
case 961:
case 3389:
case 160:
case 1429:
case 1035:
case 2810:
case 2966:
case 1991:
case 97:
case 3870:
case 3930:
case 1778:
case 3086:
case 3772:
case 3573:
case 3185:
case 3058:
case 972:
case 1052:
case 2094:
case 2712:
case 2947:
case 1893:
case 1537:
case 1919:
case 2746:
case 2433:
case 3038:
case 335:
case 3233:
case 2504:
case 1032:
case 2698:
case 3249:
case 2449:
case 3520:
case 913:
case 64:
case 1206:
case 2625:
case 2299:
case 889:
case 3654:
case 2326:
case 1244:
case 3596:
case 2848:
case 2452:
case 3572:
case 3903:
case 3252:
case 2854:
case 1258:
case 2584:
case 2713:
case 934:
case 1892:
case 2065:
case 864:
case 4052:
case 6:
case 805:
case 3232:
case 1049:
case 2704:
case 3006:
case 3077:
case 1639:
case 219:
case 3982:
case 3183:
case 1346:
case 3822:
case 2455:
case 3575:
case 1828:
case 3424:
case 3255:
case 759:
case 3318:
case 611:
case 2670:
case 1071:
case 987:
case 2062:
case 3200:
case 2515:
case 1895:
case 168:
case 3610:
case 1119:
case 447:
case 995:
case 3801:
case 2147:
case 2435:
case 2567:
case 3235:
case 95:
case 3985:
case 3102:
case 1108:
case 846:
case 3869:
case 206:
case 1614:
case 2738:
case 2808:
case 3879:
case 3939:
case 3688:
case 3517:
case 860:
case 1847:
case 2489:
case 2577:
case 2506:
case 930:
case 2257:
case 1473:
case 2195:
case 2744:
case 310:
case 2758:
case 711:
case 3437:
case 1018:
case 1213:
case 3565:
case 539:
case 986:
case 2128:
case 2660:
case 659:
case 2399:
case 3529:
case 1685:
case 2290:
case 4040:
case 1377:
case 405:
case 1306:
case 3349:
case 1134:
case 3240:
case 325:
case 2440:
case 403:
case 1724:
case 1451:
case 2192:
case 763:
case 3841:
case 2075:
case 1866:
case 1511:
case 243:
case 3116:
case 323:
case 464:
case 3142:
case 704:
case 1568:
case 567:
case 271:
case 3691:
case 791:
case 74:
case 2187:
case 1040:
case 2641:
case 540:
case 3332:
case 2995:
case 3159:
case 1338:
case 1475:
case 3352:
case 1768:
case 103:
case 1358:
case 1711:
case 3143:
case 1386:
case 949:
case 1344:
case 3563:
case 3942:
case 1948:
case 146:
case 3860:
case 2706:
case 3335:
case 2992:
case 2976:
case 2020:
case 4018:
case 2409:
case 262:
case 1874:
case 2073:
case 4061:
case 3300:
case 3619:
case 2586:
case 1496:
case 2856:
case 1212:
case 679:
case 4009:
case 2418:
case 1246:
case 742:
case 2679:
case 3608:
case 1284:
case 3355:
case 180:
case 2610:
case 3378:
case 2121:
case 173:
case 1263:
case 1068:
case 1396:
case 948:
case 3224:
case 2822:
case 2575:
case 2424:
case 732:
case 2197:
case 826:
case 175:
case 1740:
case 3623:
case 441:
case 49:
case 2985:
case 307:
case 2731:
case 1664:
case 201:
case 3065:
case 678:
case 3512:
case 609:
case 3546:
case 3713:
case 1141:
case 1294:
case 2825:
case 2903:
case 1960:
case 869:
case 1816:
case 1444:
case 3326:
case 2130:
case 939:
case 319:
case 2982:
case 73:
case 2914:
case 2006:
case 214:
case 3704:
case 2150:
case 650:
case 1438:
case 530:
case 3784:
case 1351:
case 538:
case 3094:
case 3947:
case 3712:
case 2634:
case 2573:
case 2902:
case 41:
case 2253:
case 2772:
case 1843:
case 2044:
case 3625:
case 2499:
case 2983:
case 3390:
case 1477:
case 2520:
case 62:
case 1331:
case 2648:
case 670:
case 796:
case 2921:
case 2340:
case 1217:
case 1859:
case 235:
case 1692:
case 276:
case 3504:
case 3698:
case 3063:
case 2881:
case 524:
case 294:
case 480:
case 2114:
case 4011:
case 3669:
case 2182:
case 2905:
case 2823:
case 4068:
case 549:
case 399:
case 2930:
case 1160:
case 3622:
case 127:
case 2103:
case 837:
case 1540:
case 2389:
case 1941:
case 1695:
case 188:
case 3357:
case 3480:
case 141:
case 940:
case 19:
case 1320:
case 1106:
case 3501:
case 1177:
case 2710:
case 2199:
case 163:
case 2867:
case 3770:
case 98:
case 3133:
case 998:
case 3569:
case 2651:
case 1050:
case 3027:
case 3875:
case 1528:
case 165:
case 2041:
case 789:
case 925:
case 2376:
case 957:
case 2307:
case 3342:
case 1826:
case 1030:
case 2815:
case 2631:
case 1764:
case 1:
case 3285:
case 3316:
case 44:
case 2485:
case 3153:
case 3952:
case 2403:
case 1460:
case 3008:
case 1944:
case 3613:
case 1986:
case 910:
case 111:
case 3180:
case 1236:
case 879:
case 808:
case 202:
case 4082:
case 2168:
case 3896:
case 2548:
case 3872:
case 2274:
case 3525:
case 2554:
case 4014:
case 1083:
case 2884:
case 519:
case 3282:
case 3598:
case 2482:
case 1592:
case 731:
case 2414:
case 1793:
case 1256:
case 3214:
case 3684:
case 2060:
case 1479:
case 1208:
case 2804:
case 3646:
case 3297:
case 3612:
case 1587:
case 2734:
case 1219:
case 3820:
case 2696:
case 3036:
case 1310:
case 142:
case 2247:
case 2672:
case 1609:
case 338:
case 3135:
case 3447:
case 3221:
case 4083:
case 2754:
case 746:
case 3100:
case 2421:
case 3933:
case 3873:
case 647:
case 800:
case 1082:
case 1707:
case 3283:
case 1776:
case 3155:
case 2483:
case 1837:
case 1977:
case 621:
case 266:
case 3056:
case 2813:
case 3798:
case 1890:
case 3615:
case 2405:
case 404:
case 3205:
case 4050:
case 2911:
case 2675:
case 3132:
case 703:
case 324:
case 2450:
case 244:
case 4005:
case 1441:
case 2266:
case 3722:
case 990:
case 3581:
case 2430:
case 1144:
case 1795:
case 1158:
case 3667:
case 3339:
case 705:
case 3152:
case 1714:
case 582:
case 3293:
case 3756:
case 1175:
case 496:
case 2493:
case 1341:
case 82:
case 13:
case 1782:
case 684:
case 919:
case 1853:
case 883:
case 3439:
case 2239:
case 71:
case 3877:
case 3937:
case 2644:
case 3806:
case 3519:
case 252:
case 3736:
case 4087:
case 339:
case 3508:
case 1973:
case 2034:
case 3459:
case 2579:
case 885:
case 2259:
case 2817:
case 234:
case 3287:
case 1597:
case 2321:
case 2464:
case 775:
case 1530:
case 1785:
case 1095:
case 1172:
case 2541:
case 2383:
case 1223:
case 1028:
case 712:
case 4064:
case 907:
case 1931:
case 25:
case 293:
case 780:
case 523:
case 1624:
case 3527:
case 2397:
case 154:
case 3001:
case 474:
case 1880:
case 3663:
case 381:
case 1505:
case 228:
case 2829:
case 132:
case 1410:
case 348:
case 577:
case 1800:
case 626:
case 261:
case 1064:
case 3081:
case 4028:
case 755:
case 590:
case 3791:
case 340:
case 1585:
case 1173:
case 1855:
case 1222:
case 3023:
case 788:
case 3137:
case 1750:
case 1360:
case 1269:
case 3926:
case 999:
case 1201:
case 1705:
case 1120:
case 3662:
case 3157:
case 1835:
case 1975:
case 454:
case 1298:
case 518:
case 3292:
case 3617:
case 2476:
case 2407:
case 1514:
case 2606:
case 2242:
case 3886:
case 1448:
case 1852:
case 43:
case 3416:
case 1225:
case 213:
case 2918:
case 3719:
case 1832:
case 2140:
case 1972:
case 3978:
case 2560:
case 669:
case 1797:
case 1087:
case 2779:
case 1996:
case 3665:
case 224:
case 344:
case 3968:
case 2250:
case 1962:
case 3675:
case 185:
case 2132:
case 478:
case 2769:
case 2359:
case 329:
case 3510:
case 158:
case 1626:
case 2615:
case 2971:
case 197:
case 183:
case 2667:
case 2339:
case 170:
case 3430:
case 83:
case 450:
case 2722:
case 12:
case 2980:
case 2851:
case 96:
case 2523:
case 3393:
case 3247:
case 1889:
case 2135:
case 832:
case 417:
case 2036:
case 4047:
case 2612:
case 3497:
case 3734:
case 1408:
case 2684:
case 653:
case 1559:
case 2202:
case 2646:
case 533:
case 366:
case 2056:
case 69:
case 2088:
case 3124:
case 2155:
case 3999:
case 3483:
case 2933:
case 1074:
case 627:
case 535:
case 1742:
case 576:
case 2725:
case 1163:
case 1716:
case 1543:
case 1381:
case 2100:
case 2949:
case 3421:
case 3364:
case 3673:
case 1129:
case 302:
case 2180:
case 1369:
case 2613:
case 2952:
case 1260:
case 3403:
case 3079:
case 874:
case 3534:
case 2203:
case 117:
case 4074:
case 2171:
case 2345:
case 2282:
case 2604:
case 906:
case 1488:
case 3482:
case 2872:
case 2932:
case 3274:
case 2525:
case 2474:
case 230:
case 1743:
case 3111:
case 3620:
case 1739:
case 1162:
case 3168:
case 636:
case 1542:
case 556:
case 2149:
case 458:
case 2133:
case 2955:
case 3199:
case 3867:
case 485:
case 178:
case 2501:
case 3710:
case 951:
case 2316:
case 784:
case 896:
case 1690:
case 2091:
case 3376:
case 3307:
case 1398:
case 1066:
case 2522:
case 2875:
case 3392:
case 1254:
case 1425:
case 3216:
case 2858:
case 8:
case 1574:
case 605:
case 2844:
case 3606:
case 3242:
case 1043:
case 976:
case 4016:
case 1649:
case 4042:
case 3894:
case 2292:
case 2588:
case 1498:
case 3779:
case 562:
case 2838:
case 2978:
case 315:
case 863:
case 1946:
case 2190:
case 3918:
case 1747:
case 1912:
case 1113:
case 721:
case 1356:
case 1766:
case 400:
case 1388:
case 1422:
case 760:
case 267:
case 37:
case 1824:
case 571:
case 2023:
case 1967:
case 2228:
case 2374:
case 2295:
case 240:
case 3495:
case 361:
case 1680:
case 2081:
case 108:
case 1401:
case 2926:
case 1469:
case 1915:
case 2727:
case 3303:
case 1112:
case 631:
case 551:
case 3541:
case 1146:
case 1184:
case 3161:
case 1566:
case 545:
case 901:
case 3109:
case 2591:
case 1481:
case 3321:
case 3464:
case 1868:
case 2347:
case 842:
case 3829:
case 159:
case 1319:
case 2001:
case 1600:
case 281:
case 393:
case 387:
case 543:
case 768:
case 2439:
case 3054:
case 1904:
case 3239:
case 3243:
case 506:
case 1391:
case 3865:
case 4039:
case 2788:
case 3638:
case 4043:
case 2098:
case 689:
case 3493:
case 914:
case 334:
case 1327:
case 3487:
case 2508:
case 2694:
case 3579:
case 3259:
case 1167:
case 2736:
case 1547:
case 3305:
case 2937:
case 3644:
case 2519:
case 1913:
case 536:
case 614:
case 656:
case 3:
case 3354:
case 1781:
case 250:
case 725:
case 1153:
case 3528:
case 1875:
case 512:
case 1723:
case 3334:
case 1770:
case 815:
case 723:
case 1133:
case 573:
case 304:
case 1569:
case 3050:
case 278:
case 78:
case 1955:
case 363:
case 3005:
case 782:
case 1282:
case 2488:
case 87:
case 2456:
case 1345:
case 3256:
case 2739:
case 2657:
case 861:
case 1896:
case 2809:
case 1525:
case 4056:
case 130:
case 931:
case 2743:
case 311:
case 1180:
case 1019:
case 51:
case 3236:
case 2047:
case 2994:
case 2129:
case 1952:
case 3460:
case 3002:
case 3787:
case 710:
case 1203:
case 2369:
case 3944:
case 2637:
case 3986:
case 186:
case 3082:
case 1088:
case 946:
case 1155:
case 3593:
case 3837:
case 3906:
case 3792:
case 85:
case 1798:
case 1725:
case 2163:
case 2716:
case 2381:
case 1100:
case 1933:
case 1873:
case 895:
case 2742:
case 2965:
case 2419:
case 4008:
case 2678:
case 592:
case 3609:
case 138:
case 486:
case 222:
case 887:
case 3661:
case 3479:
case 3208:
case 1202:
case 2279:
case 1646:
case 1297:
case 694:
case 2370:
case 3587:
case 270:
case 3564:
case 3291:
case 3144:
case 297:
case 3085:
case 676:
case 635:
case 1339:
case 1152:
case 1523:
case 2929:
case 2194:
case 2745:
case 2241:
case 1466:
case 59:
case 1851:
case 553:
case 964:
case 2840:
case 2427:
case 3227:
case 1250:
case 903:
case 1615:
case 1971:
case 1831:
case 4027:
case 149:
case 258:
case 1701:
case 3973:
case 643:
case 3502:
case 1459:
case 91:
case 3597:
case 844:
case 1877:
case 1519:
case 2913:
case 2167:
case 2547:
case 1126:
case 2774:
case 2016:
case 1439:
case 1025:
case 3714:
case 2632:
case 1293:
case 1756:
case 3175:
case 531:
case 33:
case 3007:
case 3076:
case 651:
case 1001:
case 1663:
case 3880:
case 980:
case 181:
case 3951:
case 3505:
case 2210:
case 332:
case 148:
case 259:
case 4070:
case 973:
case 2655:
case 3379:
case 3624:
case 2470:
case 2423:
case 0:
case 1022:
case 2112:
case 3871:
case 1591:
case 606:
case 467:
case 4023:
case 1264:
case 3785:
case 2635:
case 1178:
case 3201:
case 279:
case 3120:
case 2336:
case 1662:
case 953:
case 208:
case 3835:
case 3975:
case 799:
case 3750:
case 662:
case 481:
case 3269:
case 1926:
case 1070:
case 2422:
case 3855:
case 3222:
case 2824:
case 927:
case 2356:
case 2766:
case 1445:
case 3800:
case 2680:
case 1081:
case 1295:
case 1629:
case 3730:
case 1791:
case 99:
case 140:
case 3585:
case 3972:
case 1838:
case 3434:
case 3702:
case 3087:
case 439:
case 3996:
case 1665:
case 3131:
case 1190:
case 2912:
case 1719:
case 2043:
case 66:
case 546:
case 396:
case 2254:
case 3852:
case 2425:
case 3454:
case 3721:
case 3699:
case 3225:
case 3093:
case 1617:
case 2498:
case 1588:
case 3151:
case 2649:
case 1276:
case 1207:
case 4025:
case 2728:
case 32:
case 24:
case 2441:
case 3929:
case 1393:
case 3745:
case 383:
case 2085:
case 547:
case 40:
case 2158:
case 2186:
case 370:
case 2291:
case 4041:
case 969:
case 2890:
case 1450:
case 1387:
case 1968:
case 1675:
case 2138:
case 3074:
case 3539:
case 1748:
case 3917:
case 3543:
case 1754:
case 1421:
case 2837:
case 2977:
case 2014:
case 166:
case 2792:
case 1813:
case 2707:
case 2082:
case 1483:
case 2593:
case 402:
case 1497:
case 3408:
case 2479:
case 2208:
case 3678:
case 1672:
case 322:
case 848:
case 2219:
case 881:
case 1696:
case 840:
case 3809:
case 2938:
case 1554:
case 3516:
case 3743:
case 2689:
case 607:
case 466:
case 3739:
case 1620:
case 706:
case 3162:
case 1168:
case 3657:
case 2576:
case 3456:
case 1414:
case 2793:
case 3818:
case 1812:
case 867:
case 2083:
case 1884:
case 1328:
case 3369:
case 2986:
case 3260:
case 2958:
case 2787:
case 1534:
case 3301:
case 211:
case 2236:
case 3165:
case 3398:
case 619:
case 3066:
case 984:
case 2528:
case 1392:
case 2640:
case 1041:
case 2:
case 2354:
case 350:
case 2826:
case 1631:
case 3690:
case 263:
case 444:
case 2177:
case 1710:
case 429:
case 2050:
case 3117:
case 2334:
case 743:
case 1961:
case 3653:
case 434:
case 3946:
case 4034:
case 2131:
case 3747:
case 1779:
case 452:
case 2996:
case 1909:
case 3234:
case 1560:
case 733:
case 2434:
case 115:
case 2151:
case 4054:
case 2783:
case 2298:
case 4048:
case 1894:
case 3633:
case 1385:
case 2852:
case 3425:
case 2454:
case 2699:
case 2225:
case 1606:
case 1242:
case 3248:
case 3043:
case 677:
case 296:
case 886:
case 3915:
case 3671:
case 2750:
case 3104:
case 274:
case 1303:
case 308:
case 487:
case 379:
case 3401:
case 45:
case 2585:
case 921:
case 120:
case 161:
case 3680:
case 1245:
case 495:
case 3356:
case 618:
case 3388:
case 3422:
case 1382:
case 3824:
case 3967:
case 3470:
case 254:
case 2270:
case 193:
case 187:
case 610:
case 2379:
case 2624:
case 2505:
case 232:
case 359:
case 3319:
case 3600:
case 3811:
case 2172:
case 1109:
case 3481:
case 2196:
case 1321:
case 1464:
case 3868:
case 584:
case 1862:
case 3112:
case 3045:
case 1118:
case 15:
case 2931:
case 3423:
case 682:
case 3146:
case 3184:
case 2223:
case 3566:
case 1658:
case 3167:
case 152:
case 3652:
case 3547:
case 1644:
case 1686:
case 3913:
case 3327:
case 1350:
case 2973:
case 472:
case 1034:
case 1817:
case 1865:
case 1638:
case 3632:
case 2175:
case 2853:
case 1054:
case 537:
case 1239:
case 1048:
case 1330:
case 3774:
case 922:
case 1544:
case 3296:
case 1164:
case 2496:
case 3552:
case 1558:
case 162:
case 2934:
case 1073:
case 1461:
case 2602:
case 3484:
case 3446:
case 1888:
case 3123:
case 2697:
case 4072:
case 1418:
case 3412:
case 1538:
case 2954:
case 2683:
case 3749:
case 3170:
case 1836:
case 1907:
case 2621:
case 766:
case 1020:
case 3057:
case 406:
case 2089:
case 3998:
case 1193:
case 3555:
case 2475:
case 508:
case 2524:
case 1051:
case 443:
case 985:
case 3901:
case 579:
case 3500:
case 2215:
case 958:
case 2344:
case 1226:
case 2605:
case 3885:
case 369:
case 2768:
case 2630:
case 1031:
case 445:
case 983:
case 997:
case 2267:
case 3535:
case 970:
case 3780:
case 1641:
case 1995:
case 205:
case 92:
case 1187:
case 16:
case 1192:
case 639:
case 3198:
case 559:
case 2910:
case 2866:
case 3755:
case 2724:
case 2451:
case 3830:
case 3970:
case 2568:
case 909:
case 3026:
case 143:
case 978:
case 4051:
case 3125:
case 70:
case 3231:
case 2431:
case 151:
case 1399:
case 3805:
case 289:
case 3317:
case 2134:
case 4031:
case 1440:
case 1096:
case 3752:
case 3362:
case 1744:
case 3273:
case 3078:
case 1072:
case 2603:
case 648:
case 1660:
case 462:
case 917:
case 2018:
case 2213:
case 1237:
case 1808:
case 2682:
case 3404:
case 1738:
case 3169:
case 3897:
case 3549:
case 3101:
case 1506:
case 1257:
case 3220:
case 2847:
case 2599:
case 1489:
case 3674:
case 2628:
case 255:
case 227:
case 1103:
case 2540:
case 570:
case 1930:
case 761:
case 3645:
case 29:
case 241:
case 3136:
case 2941:
case 77:
case 2229:
case 2695:
case 1881:
case 3864:
case 194:
case 908:
case 3462:
case 3726:
case 810:
case 1905:
case 1182:
case 1823:
case 3188:
case 2024:
case 1551:
case 3557:
case 2477:
case 1520:
case 2406:
case 2331:
case 1648:
case 2589:
case 456:
case 1654:
case 1340:
case 857:
case 4077:
case 135:
case 1038:
case 1233:
case 176:
case 713:
case 4006:
case 3032:
case 3417:
case 2676:
case 1249:
case 1921:
case 649:
case 2718:
case 3537:
case 772:
case 2761:
case 3778:
case 1086:
case 2709:
case 1902:
case 1185:
case 1796:
case 133:
case 823:
case 1914:
case 1077:
case 4038:
case 3643:
case 476:
case 3757:
case 2099:
case 1105:
case 1232:
case 3238:
case 3049:
case 1150:
case 3127:
case 752:
case 3659:
case 4044:
case 2375:
case 2518:
case 3286:
case 1130:
case 3244:
case 1596:
case 2509:
case 3578:
case 2960:
case 3258:
case 1102:
case 630:
case 3108:
case 2740:
case 900:
case 818:
case 1235:
case 3790:
case 3526:
case 273:
case 2396:
case 2068:
case 793:
case 280:
case 2372:
case 368:
case 1610:
case 1822:
case 509:
case 3384:
case 1255:
case 1318:
case 3071:
case 3312:
case 578:
case 1794:
case 3018:
case 3213:
case 1046:
case 3061:
case 2883:
case 687:
case 693:
case 1959:
case 4013:
case 2078:
case 911:
case 1636:
case 2362:
case 182:
case 3847:
case 2674:
case 2329:
case 3420:
case 2101:
case 65:
case 1656:
case 2732:
case 1943:
case 2549:
case 3204:
case 3682:
case 1688:
case 730:
case 1142:
case 1015:
case 2830:
case 2970:
case 3568:
case 2026:
case 554:
case 963:
case 2365:
case 2571:
case 18:
case 2198:
case 532:
case 3866:
case 2850:
case 284:
case 157:
case 2317:
case 3134:
case 125:
case 2805:
case 1067:
case 2923:
case 3377:
case 9:
case 1490:
case 1139:
case 1352:
case 303:
case 3358:
case 615:
case 2500:
case 3215:
case 724:
case 498:
case 3344:
case 2969:
case 1563:
case 3650:
case 364:
case 3524:
case 2771:
case 2394:
case 749:
case 814:
case 4067:
case 856:
case 3040:
case 2666:
case 613:
case 305:
case 3338:
case 2467:
case 2780:
case 3630:
case 1691:
case 425:
case 1945:
case 1013:
case 3212:
case 2037:
case 3602:
case 2484:
case 1261:
case 1765:
case 2882:
case 1355:
case 3934:
case 2647:
case 4046:
case 2363:
case 2296:
case 942:
case 4084:
case 3089:
case 67:
case 2998:
case 1335:
case 801:
case 3621:
case 2057:
case 3799:
case 661:
case 1717:
case 1942:
case 596:
case 3948:
case 1004:
case 2803:
case 3683:
case 620:
case 565:
case 1435:
case 1029:
case 2790:
case 3664:
case 2119:
case 375:
case 3740:
case 3179:
case 107:
case 1670:
case 2071:
case 3845:
case 1224:
case 954:
case 4063:
case 602:
case 748:
case 268:
case 1378:
case 3011:
case 1400:
case 504:
case 2526:
case 2463:
case 2049:
case 3438:
case 93:
case 2238:
case 2639:
case 119:
case 2988:
case 871:
case 2643:
case 3509:
case 1452:
case 1854:
case 2053:
case 3444:
case 2286:
case 2244:
case 3486:
case 1848:
case 2936:
case 1166:
case 3561:
case 2737:
case 2494:
case 1713:
case 2892:
case 3294:
case 419:
case 2887:
case 1433:
case 845:
case 3217:
case 3692:
case 1504:
case 1625:
case 996:
case 3477:
case 4017:
case 3331:
case 3406:
case 851:
case 2206:
case 2908:
case 1453:
case 843:
case 3979:
case 2052:
case 2778:
case 3265:
case 2537:
case 1784:
case 3761:
case 2465:
case 1513:
case 1746:
case 392:
case 629:
case 260:
case 3941:
case 767:
case 2035:
case 1810:
case 3695:
case 388:
case 221:
case 666:
case 341:
case 247:
case 3160:
case 2313:
case 1337:
case 2156:
case 2055:
case 199:
case 353:
case 1174:
case 1211:
case 1268:
case 2864:
case 2462:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1772665201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,];
var gg_b = "1772665201/";

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
