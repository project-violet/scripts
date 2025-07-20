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
case 3564:
case 79:
case 197:
case 2920:
case 3587:
case 2116:
case 3504:
case 1916:
case 3278:
case 3060:
case 2559:
case 1120:
case 2208:
case 1285:
case 573:
case 768:
case 316:
case 2574:
case 2692:
case 2070:
case 821:
case 310:
case 805:
case 3555:
case 2072:
case 2737:
case 997:
case 614:
case 1812:
case 1743:
case 3002:
case 1257:
case 1221:
case 249:
case 2877:
case 1637:
case 902:
case 3062:
case 1437:
case 269:
case 3201:
case 3102:
case 3895:
case 1844:
case 3261:
case 912:
case 675:
case 3783:
case 4086:
case 2172:
case 1039:
case 1851:
case 1972:
case 1619:
case 1827:
case 292:
case 2492:
case 112:
case 3715:
case 306:
case 2899:
case 2170:
case 1970:
case 300:
case 734:
case 2315:
case 1524:
case 2533:
case 181:
case 591:
case 2016:
case 2636:
case 2256:
case 979:
case 3141:
case 2667:
case 2312:
case 757:
case 15:
case 3843:
case 2607:
case 3712:
case 1377:
case 464:
case 3996:
case 928:
case 2495:
case 2169:
case 3154:
case 1784:
case 2109:
case 2048:
case 3097:
case 3710:
case 3511:
case 95:
case 1238:
case 1658:
case 1975:
case 2175:
case 393:
case 1326:
case 2758:
case 1406:
case 560:
case 2310:
case 3988:
case 1466:
case 3523:
case 1399:
case 4073:
case 3306:
case 540:
case 1606:
case 3065:
case 1563:
case 888:
case 2148:
case 3197:
case 3836:
case 1948:
case 1815:
case 1458:
case 2075:
case 324:
case 231:
case 2706:
case 3727:
case 1181:
case 3751:
case 3929:
case 2981:
case 626:
case 3550:
case 2069:
case 389:
case 3054:
case 3214:
case 2009:
case 2344:
case 3079:
case 438:
case 3041:
case 2407:
case 2484:
case 856:
case 2327:
case 3744:
case 1795:
case 850:
case 2467:
case 2349:
case 3413:
case 2761:
case 3219:
case 2371:
case 2004:
case 402:
case 2701:
case 2500:
case 3570:
case 3361:
case 3947:
case 497:
case 2998:
case 3749:
case 789:
case 3074:
case 3301:
case 2356:
case 1728:
case 2055:
case 1478:
case 3345:
case 1645:
case 4017:
case 3694:
case 724:
case 1394:
case 4053:
case 2986:
case 2628:
case 3756:
case 2562:
case 3485:
case 3991:
case 479:
case 2368:
case 2778:
case 1385:
case 518:
case 1678:
case 3378:
case 3146:
case 3494:
case 2155:
case 793:
case 1955:
case 4022:
case 2689:
case 1098:
case 3657:
case 481:
case 250:
case 1357:
case 3237:
case 4020:
case 256:
case 3174:
case 1987:
case 1789:
case 412:
case 2164:
case 3613:
case 755:
case 1535:
case 4081:
case 3438:
case 205:
case 2276:
case 1856:
case 3118:
case 522:
case 559:
case 817:
case 348:
case 2150:
case 3828:
case 849:
case 1173:
case 1849:
case 2251:
case 1952:
case 2597:
case 4025:
case 2227:
case 2152:
case 428:
case 683:
case 642:
case 3314:
case 1614:
case 630:
case 2244:
case 3963:
case 677:
case 3682:
case 2934:
case 1134:
case 1923:
case 2505:
case 938:
case 1414:
case 2857:
case 2742:
case 2431:
case 944:
case 2813:
case 995:
case 2111:
case 2052:
case 138:
case 1808:
case 3393:
case 699:
case 2050:
case 3569:
case 1868:
case 3480:
case 585:
case 39:
case 1338:
case 953:
case 3258:
case 2740:
case 3018:
case 1820:
case 1705:
case 1076:
case 822:
case 3958:
case 859:
case 517:
case 101:
case 1765:
case 1375:
case 287:
case 1110:
case 2910:
case 652:
case 2605:
case 2099:
case 2665:
case 901:
case 1027:
case 1112:
case 1839:
case 2912:
case 1754:
case 3107:
case 1369:
case 1741:
case 1822:
case 549:
case 1540:
case 1429:
case 1223:
case 1593:
case 44:
case 358:
case 2654:
case 3409:
case 1629:
case 435:
case 3329:
case 2077:
case 1496:
case 1144:
case 3263:
case 3802:
case 1012:
case 1127:
case 1151:
case 498:
case 3067:
case 3580:
case 2951:
case 3007:
case 2479:
case 1853:
case 2273:
case 885:
case 1797:
case 1010:
case 3330:
case 2870:
case 1630:
case 2199:
case 3906:
case 592:
case 1488:
case 2730:
case 1176:
case 2531:
case 143:
case 111:
case 3725:
case 1264:
case 3143:
case 4068:
case 4008:
case 3190:
case 3841:
case 3722:
case 2809:
case 2462:
case 3854:
case 2869:
case 2402:
case 3739:
case 3937:
case 1255:
case 1635:
case 3335:
case 3513:
case 1015:
case 2320:
case 3036:
case 808:
case 2735:
case 3470:
case 3521:
case 3192:
case 3720:
case 240:
case 232:
case 4049:
case 1370:
case 1760:
case 2286:
case 1115:
case 372:
case 531:
case 3416:
case 745:
case 2660:
case 3136:
case 87:
case 347:
case 3897:
case 1183:
case 2602:
case 4056:
case 3247:
case 2662:
case 427:
case 1881:
case 1545:
case 3043:
case 3090:
case 61:
case 3672:
case 678:
case 3919:
case 94:
case 2373:
case 3363:
case 1663:
case 3773:
case 1506:
case 2281:
case 1566:
case 463:
case 425:
case 1898:
case 3599:
case 345:
case 4044:
case 2038:
case 2225:
case 3650:
case 1886:
case 588:
case 4012:
case 27:
case 639:
case 3288:
case 3940:
case 3577:
case 2507:
case 2584:
case 323:
case 33:
case 16:
case 767:
case 1275:
case 840:
case 3846:
case 2567:
case 832:
case 2080:
case 2334:
case 1403:
case 1323:
case 1269:
case 2082:
case 4010:
case 3734:
case 1311:
case 96:
case 3031:
case 4083:
case 3818:
case 2956:
case 2194:
case 2446:
case 3945:
case 1994:
case 9:
case 1270:
case 2850:
case 2085:
case 222:
case 574:
case 259:
case 1491:
case 3798:
case 2949:
case 2852:
case 2536:
case 2747:
case 3464:
case 1149:
case 2253:
case 2633:
case 1873:
case 2013:
case 3324:
case 641:
case 3404:
case 3347:
case 3961:
case 2398:
case 3089:
case 470:
case 2121:
case 1957:
case 2222:
case 2674:
case 603:
case 2433:
case 927:
case 2239:
case 2811:
case 1071:
case 1304:
case 3687:
case 661:
case 1424:
case 1364:
case 1774:
case 780:
case 3028:
case 1537:
case 1691:
case 3391:
case 2968:
case 891:
case 1108:
case 2185:
case 786:
case 1985:
case 1216:
case 1056:
case 2094:
case 2543:
case 1355:
case 3235:
case 3132:
case 1518:
case 931:
case 3627:
case 1407:
case 1484:
case 752:
case 3644:
case 2883:
case 1695:
case 3395:
case 2181:
case 1069:
case 1981:
case 415:
case 3096:
case 784:
case 131:
case 1706:
case 361:
case 2458:
case 1376:
case 3676:
case 2563:
case 2125:
case 3410:
case 2666:
case 3130:
case 2025:
case 4011:
case 228:
case 3965:
case 2406:
case 3610:
case 1310:
case 3476:
case 1175:
case 4023:
case 1048:
case 2238:
case 570:
case 2909:
case 2707:
case 3954:
case 1109:
case 2377:
case 2767:
case 3837:
case 421:
case 1495:
case 1169:
case 3444:
case 3029:
case 3196:
case 405:
case 1684:
case 3427:
case 25:
case 3032:
case 3979:
case 3777:
case 3941:
case 3960:
case 2020:
case 543:
case 2294:
case 2524:
case 3615:
case 107:
case 3900:
case 70:
case 3866:
case 2736:
case 1170:
case 3228:
case 1899:
case 969:
case 895:
case 582:
case 844:
case 3806:
case 623:
case 63:
case 1172:
case 907:
case 2972:
case 1443:
case 2619:
case 2827:
case 2851:
case 1490:
case 554:
case 279:
case 1953:
case 1917:
case 992:
case 3962:
case 2117:
case 3586:
case 2022:
case 2437:
case 2221:
case 1922:
case 1877:
case 2257:
case 4055:
case 2122:
case 2790:
case 2017:
case 3390:
case 1690:
case 1737:
case 1546:
case 645:
case 2419:
case 3343:
case 390:
case 1268:
case 3392:
case 864:
case 2810:
case 949:
case 2285:
case 1208:
case 4004:
case 1574:
case 202:
case 3415:
case 1920:
case 2120:
case 2792:
case 3858:
case 501:
case 117:
case 1436:
case 297:
case 3135:
case 244:
case 3878:
case 2338:
case 4009:
case 812:
case 1740:
case 527:
case 1793:
case 115:
case 378:
case 1210:
case 619:
case 2868:
case 3738:
case 2226:
case 1050:
case 796:
case 238:
case 2693:
case 1885:
case 2808:
case 2911:
case 672:
case 3284:
case 3207:
case 1813:
case 253:
case 2073:
case 2414:
case 1505:
case 2588:
case 4075:
case 1742:
case 879:
case 1565:
case 3063:
case 2923:
case 2530:
case 1244:
case 3163:
case 4048:
case 3295:
case 3525:
case 1023:
case 1631:
case 1227:
case 1251:
case 2849:
case 905:
case 5:
case 1011:
case 1973:
case 2442:
case 2299:
case 2529:
case 174:
case 2380:
case 2532:
case 3918:
case 1276:
case 802:
case 1894:
case 105:
case 3449:
case 1164:
case 3243:
case 2964:
case 2535:
case 492:
case 2789:
case 2904:
case 2987:
case 156:
case 3713:
case 407:
case 3047:
case 1689:
case 2401:
case 2357:
case 713:
case 1155:
case 56:
case 469:
case 741:
case 3893:
case 3608:
case 1308:
case 3191:
case 1368:
case 3668:
case 3292:
case 2086:
case 1745:
case 3794:
case 1986:
case 3091:
case 658:
case 3408:
case 3328:
case 3517:
case 3553:
case 2478:
case 449:
case 384:
case 2394:
case 761:
case 1880:
case 54:
case 3236:
case 828:
case 680:
case 3814:
case 329:
case 352:
case 417:
case 2198:
case 686:
case 1882:
case 1998:
case 3124:
case 1701:
case 1500:
case 3671:
case 1761:
case 1087:
case 1349:
case 3649:
case 1560:
case 3119:
case 2762:
case 2545:
case 3233:
case 1353:
case 3653:
case 2702:
case 3829:
case 485:
case 1317:
case 932:
case 3362:
case 3037:
case 1602:
case 2183:
case 946:
case 3422:
case 898:
case 3936:
case 3420:
case 1915:
case 86:
case 1286:
case 2760:
case 132:
case 2501:
case 140:
case 2825:
case 2700:
case 330:
case 3716:
case 3992:
case 4013:
case 775:
case 1735:
case 1400:
case 3620:
case 3246:
case 2316:
case 270:
case 1460:
case 2255:
case 276:
case 237:
case 3622:
case 1322:
case 3896:
case 1402:
case 1869:
case 3137:
case 960:
case 1809:
case 3417:
case 3274:
case 3990:
case 3019:
case 2204:
case 4085:
case 634:
case 2287:
case 3639:
case 3453:
case 2578:
case 459:
case 422:
case 55:
case 191:
case 4082:
case 2176:
case 3058:
case 657:
case 3218:
case 243:
case 1531:
case 1697:
case 1976:
case 282:
case 2514:
case 3625:
case 3106:
case 1325:
case 512:
case 1405:
case 2488:
case 2797:
case 2010:
case 3748:
case 2250:
case 1199:
case 2630:
case 254:
case 1441:
case 579:
case 2151:
case 2012:
case 2127:
case 1872:
case 1927:
case 2496:
case 2817:
case 1732:
case 1454:
case 3681:
case 2309:
case 3354:
case 3481:
case 8:
case 1654:
case 4038:
case 2696:
case 973:
case 2779:
case 1177:
case 2754:
case 2432:
case 3709:
case 2112:
case 2839:
case 1912:
case 3967:
case 1796:
case 173:
case 3006:
case 3365:
case 2110:
case 2926:
case 1605:
case 1126:
case 720:
case 1910:
case 3835:
case 201:
case 78:
case 597:
case 225:
case 2076:
case 2820:
case 2542:
case 3045:
case 595:
case 2355:
case 544:
case 882:
case 3346:
case 1791:
case 2216:
case 2108:
case 1185:
case 1908:
case 320:
case 2746:
case 446:
case 2774:
case 1113:
case 440:
case 3359:
case 2049:
case 2387:
case 1674:
case 2834:
case 3374:
case 2447:
case 1121:
case 3989:
case 671:
case 2921:
case 1592:
case 2957:
case 3101:
case 3202:
case 3863:
case 3161:
case 1057:
case 1021:
case 1217:
case 3803:
case 3698:
case 922:
case 1398:
case 959:
case 2647:
case 1459:
case 2873:
case 3333:
case 1253:
case 1013:
case 2624:
case 1971:
case 2272:
case 1949:
case 2008:
case 122:
case 3686:
case 801:
case 863:
case 3928:
case 825:
case 3145:
case 1194:
case 564:
case 1446:
case 2994:
case 3200:
case 1956:
case 3260:
case 1804:
case 1864:
case 3510:
case 2463:
case 491:
case 97:
case 3711:
case 1334:
case 3014:
case 2323:
case 3512:
case 2938:
case 1138:
case 1080:
case 1418:
case 26:
case 1507:
case 235:
case 1584:
case 304:
case 4077:
case 783:
case 3205:
case 742:
case 3140:
case 777:
case 298:
case 118:
case 375:
case 3040:
case 1225:
case 3544:
case 108:
case 3551:
case 3318:
case 3527:
case 24:
case 1618:
case 1038:
case 314:
case 3434:
case 2982:
case 1281:
case 2603:
case 2898:
case 3752:
case 908:
case 2566:
case 799:
case 610:
case 3931:
case 473:
case 3576:
case 3042:
case 1763:
case 3824:
case 3868:
case 2738:
case 1569:
case 520:
case 1340:
case 3640:
case 526:
case 3808:
case 3693:
case 3338:
case 2878:
case 4054:
case 21:
case 797:
case 278:
case 1480:
case 58:
case 424:
case 2003:
case 3588:
case 1889:
case 640:
case 968:
case 3414:
case 632:
case 646:
case 2063:
case 3642:
case 4065:
case 839:
case 2267:
case 471:
case 3911:
case 3073:
case 353:
case 2207:
case 3952:
case 3849:
case 934:
case 2331:
case 2861:
case 1903:
case 3382:
case 2103:
case 1963:
case 3034:
case 3614:
case 1314:
case 2163:
case 948:
case 3532:
case 3856:
case 3380:
case 781:
case 2845:
case 20:
case 1438:
case 890:
case 3529:
case 3493:
case 1266:
case 1206:
case 712:
case 3440:
case 2713:
case 3461:
case 3401:
case 1657:
case 1237:
case 3321:
case 1621:
case 2047:
case 3535:
case 3964:
case 75:
case 157:
case 2024:
case 1613:
case 3313:
case 3987:
case 3904:
case 1159:
case 3789:
case 3385:
case 1685:
case 2893:
case 575:
case 728:
case 2522:
case 2292:
case 1991:
case 803:
case 2191:
case 3955:
case 2456:
case 2785:
case 1708:
case 1494:
case 1146:
case 3445:
case 1378:
case 957:
case 1768:
case 3678:
case 2946:
case 3645:
case 4062:
case 3394:
case 284:
case 3478:
case 1046:
case 2236:
case 3728:
case 2468:
case 841:
case 2328:
case 2517:
case 2408:
case 1485:
case 1133:
case 2124:
case 416:
case 687:
case 1219:
case 1831:
case 229:
case 1457:
case 1074:
case 4000:
case 1771:
case 1947:
case 673:
case 3198:
case 1570:
case 2147:
case 2395:
case 3883:
case 1477:
case 1054:
case 2129:
case 1727:
case 49:
case 971:
case 1751:
case 3795:
case 924:
case 2627:
case 1932:
case 2132:
case 1041:
case 3125:
case 1065:
case 562:
case 1426:
case 1930:
case 3399:
case 3503:
case 1699:
case 989:
case 2573:
case 3458:
case 203:
case 3815:
case 2676:
case 2997:
case 2799:
case 1552:
case 193:
case 3975:
case 1511:
case 3238:
case 3658:
case 2726:
case 955:
case 1097:
case 328:
case 2534:
case 1523:
case 577:
case 3025:
case 3466:
case 1293:
case 1499:
case 1165:
case 1240:
case 1988:
case 1626:
case 884:
case 1892:
case 2030:
case 1843:
case 35:
case 2427:
case 2384:
case 2307:
case 852:
case 1242:
case 829:
case 993:
case 2032:
case 1179:
case 1141:
case 3784:
case 2029:
case 2196:
case 2444:
case 622:
case 3969:
case 3081:
case 434:
case 81:
case 878:
case 4033:
case 2228:
case 3547:
case 3736:
case 2866:
case 312:
case 106:
case 2806:
case 3876:
case 1160:
case 2336:
case 2960:
case 1100:
case 764:
case 3524:
case 67:
case 3117:
case 1162:
case 618:
case 906:
case 1261:
case 2962:
case 900:
case 1102:
case 2683:
case 3844:
case 239:
case 3851:
case 3827:
case 1319:
case 3972:
case 3039:
case 1783:
case 1867:
case 3139:
case 3419:
case 1807:
case 3213:
case 2289:
case 916:
case 3257:
case 3637:
case 1337:
case 3221:
case 1002:
case 4046:
case 1060:
case 1278:
case 4074:
case 3916:
case 3120:
case 744:
case 1587:
case 1564:
case 795:
case 3810:
case 302:
case 296:
case 738:
case 3985:
case 4090:
case 2486:
case 3108:
case 3746:
case 3537:
case 3168:
case 1028:
case 51:
case 578:
case 28:
case 2045:
case 419:
case 2178:
case 1978:
case 2346:
case 2498:
case 3834:
case 2764:
case 3957:
case 1189:
case 472:
case 3759:
case 3921:
case 2704:
case 2061:
case 3774:
case 3364:
case 3913:
case 3071:
case 1604:
case 3424:
case 631:
case 2359:
case 3624:
case 1487:
case 2333:
case 3873:
case 3171:
case 1464:
case 3:
case 3149:
case 1798:
case 3272:
case 3733:
case 2202:
case 467:
case 1961:
case 3647:
case 1089:
case 2803:
case 2161:
case 2200:
case 50:
case 3994:
case 711:
case 409:
case 1786:
case 3156:
case 743:
case 2078:
case 1818:
case 3519:
case 2583:
case 3270:
case 3068:
case 2686:
case 3269:
case 2711:
case 3463:
case 1526:
case 2510:
case 692:
case 3323:
case 1623:
case 1874:
case 2254:
case 2142:
case 2241:
case 899:
case 607:
case 1611:
case 923:
case 93:
case 2723:
case 2891:
case 2140:
case 4084:
case 1288:
case 1940:
case 1993:
case 275:
case 2265:
case 398:
case 2193:
case 2512:
case 3938:
case 862:
case 1846:
case 3275:
case 165:
case 36:
case 13:
case 458:
case 2297:
case 877:
case 4095:
case 34:
case 2527:
case 3248:
case 194:
case 584:
case 842:
case 830:
case 2040:
case 883:
case 3718:
case 1230:
case 3886:
case 3350:
case 1131:
case 2042:
case 994:
case 3352:
case 486:
case 480:
case 251:
case 2673:
case 945:
case 3566:
case 2752:
case 1229:
case 3603:
case 1773:
case 1363:
case 2114:
case 3881:
case 2362:
case 1247:
case 2617:
case 119:
case 299:
case 3183:
case 1717:
case 1919:
case 3372:
case 1672:
case 615:
case 2119:
case 947:
case 2653:
case 1594:
case 3545:
case 1043:
case 3760:
case 2830:
case 1670:
case 3370:
case 1092:
case 3825:
case 2571:
case 1897:
case 147:
case 2936:
case 875:
case 2549:
case 3435:
case 1136:
case 74:
case 2770:
case 503:
case 2300:
case 370:
case 3316:
case 2246:
case 2620:
case 3015:
case 1513:
case 4089:
case 337:
case 376:
case 167:
case 76:
case 3255:
case 513:
case 3635:
case 735:
case 909:
case 814:
case 2888:
case 1805:
case 1192:
case 1521:
case 2992:
case 230:
case 277:
case 1841:
case 1722:
case 605:
case 3578:
case 2453:
case 1879:
case 3287:
case 3204:
case 621:
case 2943:
case 3264:
case 674:
case 2896:
case 2622:
case 2274:
case 109:
case 2508:
case 650:
case 4031:
case 2625:
case 3514:
case 1906:
case 382:
case 3630:
case 2166:
case 656:
case 1582:
case 3250:
case 3999:
case 3010:
case 88:
case 1966:
case 820:
case 1725:
case 311:
case 1475:
case 3176:
case 539:
case 1469:
case 1195:
case 43:
case 688:
case 1329:
case 3629:
case 1007:
case 3252:
case 1580:
case 1332:
case 3151:
case 3432:
case 2907:
case 3754:
case 1184:
case 2967:
case 2341:
case 3211:
case 1538:
case 2379:
case 92:
case 2769:
case 1167:
case 3429:
case 1095:
case 3223:
case 3540:
case 3779:
case 986:
case 1669:
case 3369:
case 3977:
case 3741:
case 1396:
case 325:
case 363:
case 301:
case 3375:
case 1675:
case 1958:
case 3542:
case 3820:
case 2775:
case 2365:
case 3430:
case 596:
case 2066:
case 958:
case 3688:
case 590:
case 180:
case 3110:
case 855:
case 2771:
case 2947:
case 2301:
case 2074:
case 152:
case 3283:
case 663:
case 2059:
case 3371:
case 2219:
case 3087:
case 2831:
case 496:
case 1671:
case 984:
case 1649:
case 2133:
case 2924:
case 1933:
case 893:
case 3562:
case 952:
case 1517:
case 3628:
case 929:
case 3986:
case 3502:
case 3745:
case 1794:
case 3880:
case 545:
case 2572:
case 1236:
case 2694:
case 2345:
case 731:
case 184:
case 654:
case 2146:
case 439:
case 2378:
case 871:
case 53:
case 565:
case 1456:
case 3778:
case 1292:
case 1840:
case 1191:
case 3308:
case 1608:
case 1893:
case 388:
case 1290:
case 1520:
case 1757:
case 3187:
case 2516:
case 3104:
case 1721:
case 1959:
case 889:
case 611:
case 2033:
case 643:
case 1024:
case 1449:
case 257:
case 4035:
case 350:
case 1047:
case 1713:
case 1974:
case 2206:
case 2266:
case 2828:
case 3150:
case 1581:
case 1845:
case 321:
case 3276:
case 1918:
case 2963:
case 769:
case 3023:
case 1525:
case 1295:
case 2314:
case 1861:
case 1103:
case 3714:
case 670:
case 3973:
case 4030:
case 676:
case 637:
case 90:
case 1331:
case 3227:
case 3631:
case 3597:
case 3251:
case 2548:
case 3431:
case 978:
case 91:
case 3212:
case 1267:
case 3123:
case 3821:
case 749:
case 2889:
case 800:
case 29:
case 3793:
case 3740:
case 2258:
case 3579:
case 1878:
case 2509:
case 2393:
case 1738:
case 2569:
case 3210:
case 3574:
case 216:
case 190:
case 580:
case 3826:
case 1392:
case 3692:
case 834:
case 533:
case 2000:
case 715:
case 1135:
case 2935:
case 2564:
case 1858:
case 429:
case 3559:
case 452:
case 2060:
case 2278:
case 2504:
case 3116:
case 3877:
case 349:
case 484:
case 3922:
case 2337:
case 2807:
case 2555:
case 4091:
case 3546:
case 3737:
case 2867:
case 3690:
case 1390:
case 3271:
case 635:
case 3383:
case 1683:
case 2201:
case 369:
case 1586:
case 3917:
case 1962:
case 2100:
case 3533:
case 1035:
case 705:
case 3315:
case 1900:
case 721:
case 1336:
case 2160:
case 3016:
case 1960:
case 774:
case 200:
case 4024:
case 1228:
case 3899:
case 3169:
case 40:
case 1196:
case 509:
case 3109:
case 756:
case 3312:
case 1979:
case 1367:
case 1941:
case 1777:
case 2141:
case 1032:
case 3607:
case 1384:
case 1451:
case 255:
case 2843:
case 941:
case 2988:
case 1905:
case 3310:
case 1030:
case 3758:
case 2892:
case 1965:
case 2499:
case 788:
case 1726:
case 2511:
case 2097:
case 3048:
case 567:
case 293:
case 3175:
case 2836:
case 1997:
case 3376:
case 2197:
case 331:
case 224:
case 572:
case 1573:
case 4003:
case 103:
case 1130:
case 2005:
case 1410:
case 3925:
case 2306:
case 3327:
case 2932:
case 3351:
case 3407:
case 3467:
case 1412:
case 41:
case 3069:
case 478:
case 2727:
case 1644:
case 519:
case 3695:
case 2477:
case 2054:
case 289:
case 1114:
case 2914:
case 2599:
case 3182:
case 1847:
case 3281:
case 1824:
case 3373:
case 2411:
case 697:
case 914:
case 809:
case 1042:
case 4006:
case 1576:
case 732:
case 1544:
case 1040:
case 2650:
case 2230:
case 294:
case 3038:
case 1750:
case 1551:
case 951:
case 1318:
case 104:
case 23:
case 223:
case 3584:
case 679:
case 3138:
case 0:
case 2846:
case 318:
case 847:
case 766:
case 1193:
case 1265:
case 872:
case 1140:
case 2940:
case 2288:
case 1723:
case 2031:
case 3887:
case 3804:
case 2611:
case 1279:
case 2859:
case 1241:
case 1473:
case 2623:
case 4058:
case 3334:
case 2874:
case 3082:
case 2296:
case 975:
case 1510:
case 1928:
case 548:
case 2128:
case 359:
case 322:
case 1583:
case 2455:
case 2786:
case 3956:
case 2818:
case 2945:
case 1200:
case 880:
case 3194:
case 3398:
case 3217:
case 483:
case 2961:
case 1161:
case 1202:
case 1101:
case 858:
case 436:
case 477:
case 3536:
case 2798:
case 3852:
case 2404:
case 1333:
case 3633:
case 3253:
case 2687:
case 2604:
case 98:
case 3811:
case 3239:
case 3659:
case 1359:
case 2664:
case 3113:
case 3592:
case 3222:
case 926:
case 1704:
case 3674:
case 3590:
case 3791:
case 3646:
case 4037:
case 385:
case 3968:
case 2391:
case 126:
case 3908:
case 1755:
case 3185:
case 568:
case 1486:
case 3126:
case 2388:
case 1066:
case 1425:
case 510:
case 3910:
case 516:
case 3665:
case 1775:
case 1365:
case 373:
case 2958:
case 3788:
case 1158:
case 22:
case 233:
case 387:
case 3497:
case 785:
case 1835:
case 2675:
case 3177:
case 414:
case 2396:
case 2669:
case 3654:
case 2609:
case 1379:
case 2538:
case 3679:
case 1769:
case 3641:
case 3796:
case 2167:
case 1907:
case 1984:
case 2107:
case 2184:
case 2332:
case 3927:
case 3872:
case 475:
case 3951:
case 3729:
case 2007:
case 3381:
case 1681:
case 3454:
case 2329:
case 2862:
case 3732:
case 3944:
case 1995:
case 2469:
case 2802:
case 2195:
case 2263:
case 2648:
case 3976:
case 3531:
case 1218:
case 1397:
case 2475:
case 391:
case 2725:
case 2800:
case 2582:
case 3026:
case 1166:
case 1625:
case 759:
case 3405:
case 2906:
case 209:
case 4078:
case 2585:
case 3462:
case 942:
case 1137:
case 1896:
case 3322:
case 2937:
case 1622:
case 977:
case 2739:
case 3869:
case 1943:
case 2143:
case 3339:
case 2879:
case 983:
case 1639:
case 2722:
case 2841:
case 2190:
case 1019:
case 2470:
case 77:
case 3735:
case 177:
case 3589:
case 2557:
case 130:
case 2521:
case 142:
case 1992:
case 593:
case 2513:
case 2335:
case 1620:
case 3320:
case 524:
case 3915:
case 3848:
case 1549:
case 247:
case 1571:
case 1936:
case 1360:
case 2136:
case 4001:
case 1770:
case 653:
case 708:
case 162:
case 340:
case 571:
case 3286:
case 346:
case 865:
case 999:
case 1233:
case 1439:
case 1653:
case 3353:
case 2594:
case 1556:
case 695:
case 1302:
case 589:
case 3317:
case 962:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753038001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,];
var gg_b = "1753038001/";

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
