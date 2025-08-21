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
case 1161:
case 2310:
case 1604:
case 992:
case 3126:
case 1927:
case 2413:
case 702:
case 2947:
case 1212:
case 3722:
case 1696:
case 1791:
case 2697:
case 1871:
case 261:
case 1662:
case 2008:
case 1523:
case 1249:
case 487:
case 2715:
case 2015:
case 3321:
case 479:
case 4017:
case 2543:
case 539:
case 409:
case 4032:
case 368:
case 717:
case 3896:
case 3076:
case 2873:
case 3776:
case 3440:
case 3963:
case 2939:
case 1789:
case 735:
case 2236:
case 3804:
case 1541:
case 3139:
case 3709:
case 2264:
case 3567:
case 3009:
case 3510:
case 2972:
case 3380:
case 1005:
case 1705:
case 1018:
case 3458:
case 160:
case 133:
case 3228:
case 3862:
case 2495:
case 1718:
case 848:
case 4079:
case 921:
case 1217:
case 3641:
case 3530:
case 1431:
case 2666:
case 53:
case 1922:
case 40:
case 47:
case 2988:
case 131:
case 2362:
case 815:
case 691:
case 3470:
case 350:
case 3142:
case 2396:
case 3188:
case 3254:
case 3153:
case 2634:
case 3746:
case 2843:
case 2692:
case 263:
case 230:
case 1279:
case 2118:
case 3275:
case 3989:
case 4037:
case 1063:
case 2035:
case 2735:
case 2207:
case 1985:
case 3286:
case 3867:
case 1909:
case 2189:
case 1951:
case 1584:
case 3623:
case 3810:
case 1206:
case 2330:
case 756:
case 2600:
case 1294:
case 862:
case 618:
case 688:
case 1773:
case 1642:
case 1688:
case 3110:
case 99:
case 4040:
case 3406:
case 2326:
case 2563:
case 3265:
case 1346:
case 3539:
case 3921:
case 932:
case 3615:
case 2784:
case 1934:
case 2805:
case 1141:
case 2910:
case 1992:
case 2347:
case 2967:
case 62:
case 3338:
case 3797:
case 301:
case 564:
case 371:
case 757:
case 3097:
case 2818:
case 122:
case 869:
case 2244:
case 3547:
case 784:
case 3853:
case 1123:
case 3014:
case 2756:
case 2538:
case 3693:
case 278:
case 193:
case 3888:
case 885:
case 2676:
case 1808:
case 456:
case 2891:
case 2339:
case 795:
case 2609:
case 3460:
case 1757:
case 1815:
case 1561:
case 1900:
case 2180:
case 905:
case 3526:
case 3417:
case 1057:
case 3973:
case 402:
case 1428:
case 2041:
case 3437:
case 897:
case 1647:
case 2589:
case 3766:
case 1021:
case 3661:
case 3034:
case 2353:
case 3104:
case 3203:
case 3792:
case 820:
case 59:
case 2342:
case 191:
case 2388:
case 1997:
case 1309:
case 1639:
case 1351:
case 1445:
case 3847:
case 227:
case 2255:
case 3553:
case 2930:
case 3298:
case 1080:
case 3449:
case 567:
case 1171:
case 2838:
case 310:
case 373:
case 303:
case 3588:
case 435:
case 486:
case 4070:
case 118:
case 290:
case 2591:
case 1752:
case 2281:
case 741:
case 1861:
case 1385:
case 3130:
case 3700:
case 2023:
case 1672:
case 2621:
case 792:
case 2278:
case 2747:
case 1119:
case 1727:
case 2514:
case 972:
case 2384:
case 3217:
case 3115:
case 1530:
case 3108:
case 283:
case 358:
case 3922:
case 1142:
case 1991:
case 2122:
case 1470:
case 3667:
case 2444:
case 1746:
case 1046:
case 2026:
case 3823:
case 2915:
case 1424:
case 2726:
case 64:
case 1177:
case 603:
case 4028:
case 610:
case 2371:
case 142:
case 2993:
case 556:
case 3279:
case 1596:
case 806:
case 125:
case 935:
case 1286:
case 3985:
case 3841:
case 1504:
case 2739:
case 3763:
case 3063:
case 2866:
case 1810:
case 1905:
case 2185:
case 2772:
case 2356:
case 819:
case 986:
case 723:
case 3951:
case 2892:
case 3232:
case 2652:
case 3294:
case 3193:
case 1562:
case 238:
case 251:
case 4054:
case 721:
case 2753:
case 2053:
case 3604:
case 3856:
case 3927:
case 2088:
case 253:
case 1938:
case 49:
case 739:
case 1722:
case 180:
case 3662:
case 432:
case 502:
case 601:
case 3091:
case 1321:
case 1245:
case 3366:
case 3498:
case 2961:
case 81:
case 1776:
case 168:
case 1896:
case 586:
case 2250:
case 1785:
case 2323:
case 1804:
case 3300:
case 1172:
case 1656:
case 3089:
case 1440:
case 2566:
case 1963:
case 6:
case 2657:
case 3884:
case 1380:
case 3005:
case 3705:
case 2534:
case 517:
case 1139:
case 1751:
case 956:
case 1567:
case 3411:
case 2777:
case 2499:
case 2282:
case 535:
case 2077:
case 4075:
case 3018:
case 1671:
case 2897:
case 360:
case 3593:
case 3428:
case 3258:
case 211:
case 1162:
case 421:
case 1973:
case 2576:
case 1839:
case 439:
case 1211:
case 859:
case 3647:
case 3021:
case 1766:
case 2464:
case 1437:
case 3184:
case 3835:
case 97:
case 587:
case 2767:
case 2509:
case 3240:
case 1792:
case 732:
case 2710:
case 1034:
case 2010:
case 2984:
case 1104:
case 1872:
case 3626:
case 516:
case 88:
case 2827:
case 2956:
case 3780:
case 1305:
case 4031:
case 3639:
case 984:
case 541:
case 298:
case 173:
case 1412:
case 3752:
case 554:
case 804:
case 874:
case 767:
case 3861:
case 3385:
case 2114:
case 1700:
case 1130:
case 3672:
case 1826:
case 3043:
case 1519:
case 3743:
case 775:
case 2096:
case 1432:
case 2876:
case 3966:
case 1265:
case 916:
case 1539:
case 4003:
case 2192:
case 877:
case 2361:
case 2941:
case 2004:
case 3653:
case 2704:
case 2134:
case 557:
case 2809:
case 2851:
case 3619:
case 2166:
case 2407:
case 3486:
case 1572:
case 1338:
case 979:
case 101:
case 322:
case 1877:
case 987:
case 85:
case 50:
case 43:
case 3123:
case 2416:
case 1714:
case 1853:
case 2730:
case 2100:
case 3454:
case 954:
case 2689:
case 1547:
case 3270:
case 812:
case 595:
case 668:
case 2268:
case 2822:
case 1888:
case 3677:
case 1952:
case 423:
case 3808:
case 584:
case 270:
case 200:
case 149:
case 3900:
case 3561:
case 3815:
case 1417:
case 2923:
case 2605:
case 941:
case 3057:
case 1943:
case 1363:
case 1231:
case 2222:
case 376:
case 2868:
case 655:
case 3870:
case 2559:
case 2501:
case 4026:
case 2960:
case 3978:
case 2443:
case 2917:
case 3824:
case 1219:
case 2745:
case 1831:
case 3160:
case 1025:
case 2480:
case 4047:
case 1916:
case 2513:
case 162:
case 2358:
case 524:
case 3208:
case 3395:
case 66:
case 1399:
case 264:
case 697:
case 3869:
case 3036:
case 2285:
case 3106:
case 3736:
case 3313:
case 4072:
case 700:
case 2644:
case 829:
case 1511:
case 1865:
case 831:
case 3702:
case 508:
case 858:
case 451:
case 3558:
case 2595:
case 1782:
case 1082:
case 1748:
case 115:
case 382:
case 2994:
case 1503:
case 1186:
case 3987:
case 1441:
case 3540:
case 2421:
case 137:
case 3359:
case 3631:
case 2251:
case 232:
case 1990:
case 340:
case 1658:
case 2568:
case 685:
case 1778:
case 1078:
case 669:
case 447:
case 2457:
case 3524:
case 2227:
case 711:
case 4053:
case 3925:
case 2369:
case 3716:
case 2620:
case 1456:
case 29:
case 148:
case 636:
case 4088:
case 833:
case 4042:
case 3950:
case 3569:
case 1936:
case 3235:
case 3698:
case 3007:
case 2086:
case 3883:
case 1902:
case 481:
case 888:
case 275:
case 3462:
case 3948:
case 3368:
case 3496:
case 908:
case 1272:
case 1787:
case 2937:
case 2324:
case 978:
case 2150:
case 1344:
case 3840:
case 1103:
case 1733:
case 1316:
case 1204:
case 2850:
case 526:
case 1296:
case 155:
case 2690:
case 747:
case 266:
case 1999:
case 3594:
case 1974:
case 304:
case 2882:
case 561:
case 411:
case 2848:
case 662:
case 2629:
case 1111:
case 2940:
case 239:
case 3837:
case 2317:
case 1435:
case 3506:
case 2587:
case 1768:
case 1068:
case 2394:
case 1461:
case 1955:
case 3256:
case 1230:
case 2306:
case 3387:
case 2113:
case 3517:
case 3426:
case 2578:
case 781:
case 3744:
case 963:
case 3913:
case 1307:
case 3849:
case 2825:
case 637:
case 1981:
case 2159:
case 2031:
case 3447:
case 891:
case 498:
case 615:
case 2438:
case 2379:
case 3628:
case 120:
case 3271:
case 38:
case 2266:
case 2011:
case 1660:
case 169:
case 3241:
case 2405:
case 961:
case 3325:
case 1095:
case 3879:
case 634:
case 23:
case 3477:
case 3799:
case 893:
case 1493:
case 292:
case 3894:
case 2582:
case 2312:
case 648:
case 3832:
case 4004:
case 926:
case 1165:
case 1267:
case 3537:
case 3169:
case 2887:
case 3806:
case 1210:
case 3720:
case 2970:
case 3512:
case 3382:
case 563:
case 3968:
case 1679:
case 2607:
case 2798:
case 1415:
case 2337:
case 3817:
case 3755:
case 1131:
case 1701:
case 1759:
case 2878:
case 738:
case 1001:
case 1059:
case 3860:
case 1013:
case 744:
case 3453:
case 2525:
case 3549:
case 1606:
case 1713:
case 1854:
case 4030:
case 3081:
case 3781:
case 1302:
case 1632:
case 3170:
case 3442:
case 35:
case 1694:
case 334:
case 868:
case 461:
case 4008:
case 3990:
case 3658:
case 2238:
case 11:
case 2695:
case 3898:
case 2017:
case 3683:
case 2544:
case 287:
case 2060:
case 3778:
case 2129:
case 3078:
case 4015:
case 2760:
case 1333:
case 2414:
case 1716:
case 1261:
case 3640:
case 2881:
case 2365:
case 216:
case 1112:
case 348:
case 2190:
case 2331:
case 2659:
case 2601:
case 2263:
case 3565:
case 3811:
case 2164:
case 1569:
case 1950:
case 607:
case 3484:
case 3936:
case 1007:
case 2079:
case 241:
case 1462:
case 2899:
case 665:
case 727:
case 152:
case 1948:
case 2102:
case 2732:
case 1982:
case 1840:
case 3344:
case 3803:
case 2006:
case 3087:
case 1404:
case 2820:
case 842:
case 2012:
case 3374:
case 825:
case 106:
case 1090:
case 3288:
case 2633:
case 3669:
case 3423:
case 2555:
case 3253:
case 257:
case 2954:
case 3916:
case 1215:
case 1117:
case 2749:
case 911:
case 3219:
case 1729:
case 2311:
case 1029:
case 2581:
case 243:
case 604:
case 1395:
case 1208:
case 27:
case 1467:
case 659:
case 3381:
case 3865:
case 2492:
case 3050:
case 1410:
case 1869:
case 3907:
case 1106:
case 3624:
case 1002:
case 2668:
case 1702:
case 1132:
case 3670:
case 182:
case 2218:
case 850:
case 463:
case 500:
case 430:
case 284:
case 3748:
case 3175:
case 3277:
case 337:
case 1301:
case 1359:
case 1631:
case 778:
case 708:
case 3503:
case 2398:
case 2107:
case 3441:
case 2037:
case 3355:
case 2083:
case 369:
case 3886:
case 2807:
case 3617:
case 1933:
case 2783:
case 2451:
case 2409:
case 2221:
case 3660:
case 1477:
case 947:
case 1799:
case 583:
case 1099:
case 640:
case 214:
case 3875:
case 112:
case 385:
case 2058:
case 3795:
case 1074:
case 394:
case 2476:
case 1774:
case 2485:
case 8:
case 1720:
case 849:
case 2040:
case 2564:
case 3679:
case 2590:
case 1512:
case 256:
case 1968:
case 4071:
case 1675:
case 3759:
case 3701:
case 3131:
case 3944:
case 3059:
case 107:
case 3364:
case 1419:
case 189:
case 1686:
case 3415:
case 2280:
case 1817:
case 981:
case 1755:
case 2529:
case 4056:
case 1081:
case 2931:
case 1781:
case 1453:
case 3606:
case 1549:
case 2687:
case 3713:
case 1350:
case 1442:
case 15:
case 3694:
case 1488:
case 2252:
case 551:
case 538:
case 3632:
case 652:
case 3586:
case 2836:
case 2069:
case 1472:
case 2911:
case 873:
case 803:
case 3575:
case 2174:
case 3296:
case 1995:
case 606:
case 1579:
case 355:
case 676:
case 3974:
case 174:
case 3262:
case 3828:
case 3920:
case 3435:
case 3649:
case 547:
case 1506:
case 4041:
case 1378:
case 286:
case 2070:
case 490:
case 2770:
case 1744:
case 1901:
case 1560:
case 4023:
case 1959:
case 397:
case 1256:
case 3955:
case 2998:
case 1426:
case 938:
case 2650:
case 3845:
case 1447:
case 1913:
case 2516:
case 3198:
case 3637:
case 2155:
case 235:
case 1628:
case 1271:
case 2682:
case 682:
case 2375:
case 632:
case 2875:
case 3502:
case 878:
case 2795:
case 3058:
case 2095:
case 285:
case 3536:
case 1550:
case 2617:
case 92:
case 3807:
case 3083:
case 269:
case 2660:
case 3678:
case 529:
case 3409:
case 988:
case 3485:
case 1234:
case 1489:
case 3564:
case 3740:
case 1292:
case 69:
case 294:
case 1312:
case 1582:
case 2493:
case 2944:
case 2001:
case 2701:
case 2131:
case 449:
case 4:
case 1098:
case 2415:
case 1798:
case 1337:
case 1607:
case 123:
case 2408:
case 356:
case 1491:
case 605:
case 2694:
case 3422:
case 2632:
case 3252:
case 3144:
case 3529:
case 3243:
case 2713:
case 2606:
case 1200:
case 3816:
case 2013:
case 3174:
case 2575:
case 3273:
case 166:
case 1958:
case 2296:
case 3354:
case 1850:
case 3120:
case 2033:
case 2204:
case 1983:
case 2103:
case 2733:
case 1065:
case 699:
case 958:
case 2435:
case 2920:
case 3864:
case 1940:
case 1629:
case 1848:
case 1882:
case 2974:
case 26:
case 1195:
case 929:
case 2828:
case 372:
case 3446:
case 1578:
case 3650:
case 1113:
case 1636:
case 1306:
case 3998:
case 2955:
case 1602:
case 1332:
case 3070:
case 220:
case 1379:
case 335:
case 3648:
case 44:
case 560:
case 410:
case 1031:
case 2981:
case 2845:
case 1731:
case 768:
case 317:
case 3386:
case 2637:
case 3427:
case 1125:
case 309:
case 2683:
case 922:
case 2898:
case 1457:
case 379:
case 3760:
case 1859:
case 2145:
case 387:
case 296:
case 234:
case 1912:
case 480:
case 1699:
case 63:
case 2471:
case 132:
case 1674:
case 591:
case 692:
case 3190:
case 4022:
case 1620:
case 1813:
case 1754:
case 2456:
case 1369:
case 3414:
case 1054:
case 2929:
case 2640:
case 2531:
case 105:
case 341:
case 3079:
case 3779:
case 1148:
case 3899:
case 1182:
case 2902:
case 623:
case 3164:
case 2239:
case 3263:
case 2565:
case 3659:
case 3331:
case 1655:
case 1533:
case 1786:
case 4085:
case 1681:
case 710:
case 773:
case 993:
case 1324:
case 3706:
case 2087:
case 3794:
case 3928:
case 3094:
case 354:
case 3874:
case 1370:
case 3102:
case 1473:
case 518:
case 3032:
case 2320:
case 2154:
case 3400:
case 1917:
case 3303:
case 2598:
case 701:
case 1452:
case 3012:
case 830:
case 1222:
case 666:
case 2242:
case 3291:
case 2399:
case 522:
case 343:
case 1358:
case 262:
case 3749:
case 3581:
case 639:
case 1045:
case 1178:
case 2831:
case 1745:
case 7:
case 749:
case 2670:
case 3975:
case 3599:
case 2865:
case 3492:
case 2381:
case 1644:
case 918:
case 2907:
case 1187:
case 1209:
case 237:
case 3037:
case 2186:
case 3398:
case 1728:
case 3218:
case 1994:
case 215:
case 2748:
case 425:
case 2175:
case 2082:
case 2782:
case 1932:
case 442:
case 3690:
case 2995:
case 1802:
case 2472:
case 1120:
case 3850:
case 657:
case 1836:
case 1864:
case 3940:
case 2645:
case 3463:
case 2378:
case 4021:
case 2506:
case 1903:
case 1625:
case 3587:
case 2284:
case 2837:
case 339:
case 2594:
case 321:
case 60:
case 3848:
case 274:
case 643:
case 204:
case 3882:
case 67:
case 3113:
case 3214:
case 3306:
case 1998:
case 3636:
case 2387:
case 259:
case 4043:
case 2044:
case 1181:
case 2959:
case 1446:
case 2744:
case 3578:
case 1770:
case 418:
case 568:
case 695:
case 1070:
case 186:
case 1890:
case 3394:
case 4052:
case 1682:
case 28:
case 2271:
case 684:
case 1386:
case 1427:
case 4080:
case 3031:
case 117:
case 3418:
case 1758:
case 445:
case 3266:
case 1965:
case 1451:
case 1536:
case 687:
case 2325:
case 3349:
case 3969:
case 3405:
case 2241:
case 980:
case 731:
case 758:
case 3292:
case 2720:
case 3003:
case 2654:
case 3887:
case 3234:
case 1485:
case 3616:
case 3133:
case 2020:
case 3703:
case 2537:
case 392:
case 616:
case 4073:
case 813:
case 870:
case 729:
case 2817:
case 1280:
case 3098:
case 3607:
case 2686:
case 289:
case 207:
case 2860:
case 4057:
case 277:
case 156:
case 641:
case 1590:
case 1328:
case 265:
case 1422:
case 3168:
case 2488:
case 25:
case 2442:
case 654:
case 968:
case 2549:
case 1687:
case 2223:
case 3200:
case 2781:
case 2081:
case 745:
case 2978:
case 157:
case 3559:
case 3960:
case 722:
case 399:
case 1400:
case 1555:
case 1116:
case 1633:
case 844:
case 2090:
case 206:
case 3868:
case 3222:
case 276:
case 3358:
case 143:
case 10:
case 4038:
case 851:
case 431:
case 501:
case 602:
case 3045:
case 1311:
case 3383:
case 3513:
case 3480:
case 1049:
case 2132:
case 2702:
case 1668:
case 2002:
case 1975:
case 195:
case 3979:
case 2558:
case 1986:
case 3285:
case 2736:
case 2106:
case 1434:
case 2869:
case 2036:
case 1492:
case 1289:
case 903:
case 4063:
case 94:
case 3906:
case 1737:
case 910:
case 973:
case 5:
case 3251:
case 549:
case 1466:
case 2631:
case 2359:
case 2301:
case 3421:
case 2064:
case 3994:
case 791:
case 1129:
case 3859:
case 187:
case 109:
case 2149:
case 3227:
case 1717:
case 1017:
case 179:
case 3457:
case 4091:
case 3912:
case 3699:
case 42:
case 881:
case 488:
case 2112:
case 0:
case 1881:
case 1945:
case 3754:
case 3813:
case 3620:
case 2430:
case 2716:
case 3369:
case 3054:
case 3148:
case 9:
case 433:
case 460:
case 3182:
case 1899:
case 4018:
case 853:
case 54:
case 305:
case 3895:
case 2462:
case 141:
case 375:
case 3655:
case 2007:
case 3086:
case 2707:
case 3786:
case 1164:
case 1601:
case 4005:
case 367:
case 1820:
case 1613:
case 1136:
case 1706:
case 2404:
case 847:
case 4089:
case 3370:
case 1874:
case 1102:
case 1794:
case 252:
case 1094:
case 2021:
case 3464:
case 1863:
case 2721:
case 962:
case 2184:
case 1041:
case 2283:
case 474:
case 311:
case 2428:
case 2593:
case 3295:
case 3197:
case 1996:
case 1448:
case 1299:
case 3576:
case 291:
case 1274:
case 3067:
case 740:
case 3509:
case 2626:
case 1450:
case 3010:
case 3984:
case 1353:
case 1220:
case 48:
case 630:
case 663:
case 1377:
case 398:
case 866:
case 2171:
case 1425:
case 2080:
case 915:
case 3827:
case 1255:
case 3259:
case 2445:
case 3429:
case 2639:
case 2385:
case 3114:
case 2861:
case 3213:
case 459:
case 839:
case 2043:
case 2376:
case 1591:
case 3971:
case 218:
case 1889:
case 3192:
case 2346:
case 4020:
case 2535:
case 3233:
case 2269:
case 3941:
case 3361:
case 3796:
case 2893:
case 2073:
case 3762:
case 245:
case 124:
case 3691:
case 934:
case 3166:
case 1967:
case 3809:
case 1805:
case 2934:
case 1784:
case 706:
case 1676:
case 1152:
case 3822:
case 2270:
case 293:
case 108:
case 1538:
case 2454:
case 1372:
case 3730:
case 2123:
case 4081:
case 3527:
case 3416:
case 2224:
case 1143:
case 1244:
case 2057:
case 1180:
case 2561:
case 1478:
case 489:
case 515:
case 465:
case 1891:
case 3618:
case 300:
case 2808:
case 231:
case 1942:
case 2397:
case 2738:
case 585:
case 1666:
case 3047:
case 3621:
case 419:
case 229:
case 1953:
case 2556:
case 96:
case 3384:
case 2217:
case 3514:
case 1843:
case 2667:
case 1061:
case 3800:
case 1216:
case 2823:
case 955:
case 3908:
case 406:
case 476:
case 627:
case 4064:
case 3039:
case 899:
case 75:
case 3739:
case 3109:
case 2976:
case 482:
case 1118:
case 130:
case 789:
case 351:
case 864:
case 2294:
case 3772:
case 3356:
case 1600:
case 3834:
case 2314:
case 2584:
case 3072:
case 2951:
case 2909:
case 3788:
case 288:
case 3742:
case 3088:
case 1290:
case 805:
case 126:
case 2212:
case 3673:
case 2392:
case 4016:
case 1947:
case 936:
case 2856:
case 704:
case 2604:
case 3053:
case 3753:
case 3814:
case 2161:
case 1580:
case 3719:
case 1229:
case 1401:
case 347:
case 3455:
case 3500:
case 1015:
case 3127:
case 3225:
case 2662:
case 624:
case 161:
case 969:
case 1697:
case 22:
case 2541:
case 2630:
case 3935:
case 1614:
case 3566:
case 1521:
case 2089:
case 78:
case 608:
case 452:
case 1873:
case 832:
case 3077:
case 3777:
case 381:
case 260:
case 2018:
case 3534:
case 2135:
case 2705:
case 1972:
case 4007:
case 2411:
case 728:
case 1163:
case 1264:
case 1233:
case 3326:
case 1704:
case 1885:
case 1941:
case 1361:
case 762:
case 1192:
case 2167:
case 3622:
case 1876:
case 653:
case 2432:
case 2494:
case 494:
case 856:
case 1096:
case 324:
case 2877:
case 1691:
case 4095:
case 485:
case 271:
case 2338:
case 647:
case 3910:
case 3084:
case 91:
case 3805:
case 2572:
case 3967:
case 1166:
case 469:
case 3121:
case 2888:
case 3538:
case 2842:
case 1822:
case 3676:
case 1268:
case 3143:
case 1689:
case 3244:
case 2980:
case 2014:
case 1730:
case 3685:
case 1527:
case 1030:
case 952:
case 3056:
case 2231:
case 3478:
case 3339:
case 1546:
case 3651:
case 3609:
case 1923:
case 4059:
case 4001:
case 2417:
case 249:
case 3071:
case 100:
case 170:
case 3771:
case 3741:
case 3904:
case 1315:
case 1585:
case 3319:
case 1464:
case 3589:
case 748:
case 3448:
case 1576:
case 683:
case 3299:
case 51:
case 2391:
case 1295:
case 1197:
case 3173:
case 455:
case 835:
case 3274:
case 3388:
case 3342:
case 2104:
case 2734:
case 1984:
case 1010:
case 3220:
case 796:
case 817:
case 4033:
case 976:
case 3646:
case 2318:
case 2588:
case 210:
case 644:
case 198:
case 1522:
case 420:
case 1663:
case 2449:
case 2635:
case 2305:
case 2298:
case 982:
case 1956:
case 3157:
case 2389:
case 2957:
case 3023:
case 2700:
case 2000:
case 3723:
case 1213:
case 1490:
case 4068:
case 390:
case 1393:
case 802:
case 552:
case 2412:
case 638:
case 3591:
case 146:
case 651:
case 2722:
case 326:
case 1673:
case 2938:
case 1788:
case 1042:
case 2126:
case 3413:
case 1814:
case 1753:
case 76:
case 3367:
case 1961:
case 1500:
case 1455:
case 4078:
case 2684:
case 3715:
case 912:
case 3857:
case 1127:
case 1225:
case 3229:
case 3543:
case 3459:
case 3401:
case 147:
case 3552:
case 854:
case 496:
case 3008:
case 280:
case 574:
case 3939:
case 1566:
case 2440:
case 720:
case 4087:
case 879:
case 2085:
case 2785:
case 1323:
case 1935:
case 2896:
case 3793:
case 3873:
case 3202:
case 2076:
case 3495:
case 2228:
case 1897:
case 797:
case 1077:
case 600:
case 1499:
case 1777:
case 58:
case 2051:
case 2009:
case 1592:
case 2567:
case 2751:
case 2709:
case 2483:
case 2380:
case 965:
case 3972:
case 1657:
case 2510:
case 462:
case 183:
case 2027:
case 794:
case 3880:
case 1747:
case 904:
case 1621:
case 1800:
case 1915:
case 2153:
case 3557:
case 1026:
case 3761:
case 3843:
case 785:
case 3692:
case 3919:
case 769:
case 2470:
case 3396:
case 2188:
case 884:
case 2142:
case 1866:
case 1039:
case 1151:
case 1109:
case 2504:
case 3735:
case 2286:
case 3035:
case 857:
case 1680:
case 507:
case 2357:
case 225:
case 4082:
case 363:
case 330:
case 242:
case 4048:
case 144:
case 2275:
case 646:
case 151:
case 959:
case 1652:
case 3977:
case 843:
case 80:
case 1643:
case 3189:
case 2867:
case 1772:
case 3330:
case 1834:
case 3600:
case 1185:
case 2810:
case 2905:
case 928:
case 1072:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755748801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,];
var gg_b = "1755748801/";

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
