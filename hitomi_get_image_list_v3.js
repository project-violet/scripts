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
case 2958:
case 3196:
case 1580:
case 2:
case 1412:
case 3914:
case 102:
case 1320:
case 3573:
case 1061:
case 1069:
case 1337:
case 1946:
case 2866:
case 3292:
case 893:
case 3152:
case 3038:
case 635:
case 3890:
case 792:
case 3775:
case 2219:
case 872:
case 2843:
case 3256:
case 491:
case 1482:
case 1674:
case 2339:
case 1287:
case 1357:
case 3526:
case 348:
case 2571:
case 1888:
case 2579:
case 895:
case 2938:
case 3283:
case 2796:
case 775:
case 3967:
case 1270:
case 3774:
case 129:
case 2351:
case 3760:
case 1344:
case 3236:
case 1818:
case 3058:
case 3849:
case 2752:
case 2014:
case 3316:
case 3333:
case 1441:
case 762:
case 2508:
case 1449:
case 689:
case 305:
case 724:
case 181:
case 958:
case 2769:
case 359:
case 4047:
case 75:
case 456:
case 1513:
case 1536:
case 1298:
case 2163:
case 1583:
case 2622:
case 1032:
case 1158:
case 3570:
case 4035:
case 3614:
case 2242:
case 2658:
case 468:
case 2825:
case 546:
case 736:
case 8:
case 43:
case 1646:
case 4007:
case 2891:
case 3763:
case 1556:
case 3327:
case 3210:
case 3882:
case 2455:
case 3587:
case 720:
case 2434:
case 927:
case 2548:
case 3161:
case 865:
case 3746:
case 3615:
case 4034:
case 3565:
case 2106:
case 147:
case 2202:
case 1138:
case 3812:
case 3667:
case 1273:
case 295:
case 2638:
case 599:
case 2394:
case 2511:
case 1330:
case 3401:
case 3975:
case 50:
case 1161:
case 3409:
case 3490:
case 2669:
case 224:
case 1327:
case 3556:
case 3784:
case 2443:
case 3273:
case 3028:
case 2167:
case 478:
case 627:
case 3714:
case 1517:
case 3052:
case 4043:
case 236:
case 2060:
case 1565:
case 2466:
case 347:
case 2115:
case 873:
case 2329:
case 1878:
case 3606:
case 2321:
case 1615:
case 976:
case 2589:
case 1746:
case 3513:
case 2184:
case 3960:
case 1684:
case 3663:
case 2395:
case 381:
case 3785:
case 3449:
case 1488:
case 2279:
case 388:
case 510:
case 989:
case 632:
case 3122:
case 2996:
case 2542:
case 3270:
case 1283:
case 1967:
case 4040:
case 2063:
case 1915:
case 3888:
case 3906:
case 586:
case 2425:
case 148:
case 3357:
case 1316:
case 3493:
case 4025:
case 1841:
case 2208:
case 292:
case 2854:
case 1760:
case 2835:
case 1236:
case 1213:
case 72:
case 1598:
case 2440:
case 824:
case 329:
case 1774:
case 3872:
case 3577:
case 1497:
case 3478:
case 3061:
case 2696:
case 1573:
case 2424:
case 3069:
case 430:
case 4000:
case 579:
case 313:
case 2807:
case 1196:
case 302:
case 3320:
case 3217:
case 1914:
case 4091:
case 3510:
case 3674:
case 2855:
case 820:
case 3963:
case 4024:
case 3287:
case 3304:
case 2652:
case 1809:
case 1128:
case 1801:
case 2248:
case 1152:
case 1890:
case 2834:
case 3481:
case 3745:
case 1605:
case 6:
case 2297:
case 1375:
case 2105:
case 3566:
case 663:
case 1753:
case 2651:
case 2659:
case 507:
case 1507:
case 3704:
case 1151:
case 1224:
case 4056:
case 1159:
case 3720:
case 975:
case 1299:
case 470:
case 749:
case 2456:
case 539:
case 235:
case 2590:
case 384:
case 1534:
case 1095:
case 2768:
case 3411:
case 3686:
case 2509:
case 1448:
case 2483:
case 2962:
case 2639:
case 1842:
case 106:
case 1360:
case 3744:
case 1547:
case 4013:
case 1225:
case 2145:
case 3879:
case 3950:
case 992:
case 1716:
case 665:
case 3871:
case 2541:
case 3757:
case 796:
case 2549:
case 1408:
case 1786:
case 2027:
case 1923:
case 1094:
case 1535:
case 1620:
case 3723:
case 289:
case 1203:
case 3235:
case 2053:
case 1957:
case 3254:
case 3986:
case 3121:
case 2218:
case 316:
case 835:
case 3630:
case 693:
case 727:
case 3525:
case 920:
case 3385:
case 3933:
case 1479:
case 2864:
case 3627:
case 3442:
case 3247:
case 1944:
case 751:
case 2721:
case 144:
case 3848:
case 3059:
case 276:
case 3314:
case 18:
case 2123:
case 4080:
case 438:
case 821:
case 2582:
case 2322:
case 3255:
case 2016:
case 1623:
case 2817:
case 2512:
case 828:
case 1162:
case 3195:
case 3207:
case 2939:
case 3384:
case 1363:
case 2662:
case 3650:
case 1945:
case 962:
case 1881:
case 758:
case 423:
case 732:
case 3953:
case 2865:
case 1266:
case 542:
case 490:
case 1255:
case 1591:
case 995:
case 1848:
case 3819:
case 2044:
case 65:
case 3811:
case 849:
case 2290:
case 3937:
case 2150:
case 227:
case 2892:
case 1953:
case 1650:
case 3945:
case 2695:
case 3363:
case 1402:
case 636:
case 1195:
case 3162:
case 2629:
case 3306:
case 116:
case 1315:
case 340:
case 1254:
case 3676:
case 3957:
case 47:
case 2241:
case 1129:
case 2004:
case 896:
case 3203:
case 2498:
case 1235:
case 2813:
case 1367:
case 2127:
case 508:
case 1247:
case 1627:
case 2883:
case 2130:
case 1194:
case 3479:
case 3750:
case 972:
case 1933:
case 1916:
case 2694:
case 1525:
case 2020:
case 1630:
case 1385:
case 258:
case 1879:
case 1871:
case 3225:
case 2352:
case 2470:
case 2751:
case 1744:
case 3360:
case 3842:
case 306:
case 3547:
case 409:
case 3029:
case 3620:
case 3094:
case 965:
case 3535:
case 692:
case 4070:
case 2877:
case 3923:
case 180:
case 1168:
case 2739:
case 4087:
case 92:
case 1927:
case 3644:
case 2212:
case 3507:
case 1704:
case 2880:
case 2417:
case 582:
case 2465:
case 728:
case 2994:
case 1566:
case 3375:
case 1481:
case 675:
case 2023:
case 3605:
case 1686:
case 296:
case 3657:
case 3534:
case 2921:
case 3095:
case 721:
case 2929:
case 3200:
case 2282:
case 851:
case 3555:
case 464:
case 2487:
case 2810:
case 1720:
case 1543:
case 14:
case 866:
case 3299:
case 3437:
case 2468:
case 2275:
case 1876:
case 1748:
case 3420:
case 611:
case 37:
case 2324:
case 2756:
case 2071:
case 269:
case 2584:
case 3136:
case 2079:
case 565:
case 1902:
case 1164:
case 2391:
case 2514:
case 3404:
case 3522:
case 125:
case 2664:
case 3382:
case 200:
case 1170:
case 3789:
case 550:
case 3830:
case 1453:
case 3098:
case 2687:
case 943:
case 2274:
case 846:
case 2736:
case 2713:
case 16:
case 5:
case 3648:
case 138:
case 1080:
case 3457:
case 2585:
case 786:
case 2325:
case 1561:
case 1569:
case 390:
case 2111:
case 2926:
case 2181:
case 3405:
case 3971:
case 982:
case 3850:
case 639:
case 1689:
case 2515:
case 3192:
case 1433:
case 1416:
case 1165:
case 554:
case 2783:
case 1117:
case 3538:
case 2340:
case 2862:
case 3296:
case 2617:
case 1238:
case 2673:
case 2102:
case 1372:
case 1844:
case 3742:
case 2303:
case 1173:
case 683:
case 1771:
case 3816:
case 3087:
case 1450:
case 322:
case 3017:
case 1552:
case 710:
case 3908:
case 3261:
case 364:
case 869:
case 1528:
case 170:
case 299:
case 3065:
case 3679:
case 1981:
case 3390:
case 309:
case 3671:
case 685:
case 1845:
case 2246:
case 1013:
case 70:
case 406:
case 2494:
case 3301:
case 2780:
case 1258:
case 2008:
case 2142:
case 593:
case 1820:
case 2421:
case 2429:
case 174:
case 1837:
case 1911:
case 4094:
case 246:
case 3476:
case 1919:
case 3427:
case 3258:
case 2214:
case 1309:
case 2992:
case 3036:
case 3013:
case 2171:
case 3981:
case 1679:
case 1671:
case 137:
case 3911:
case 210:
case 3919:
case 608:
case 3083:
case 160:
case 3532:
case 799:
case 2677:
case 2284:
case 3771:
case 1816:
case 3450:
case 942:
case 1087:
case 3318:
case 562:
case 1341:
case 2011:
case 3844:
case 2680:
case 3602:
case 3238:
case 617:
case 3596:
case 2560:
case 2347:
case 3092:
case 2798:
case 1110:
case 4062:
case 484:
case 983:
case 370:
case 3528:
case 2285:
case 536:
case 746:
case 44:
case 1908:
case 3857:
case 122:
case 1073:
case 1228:
case 190:
case 1252:
case 3611:
case 3708:
case 3187:
case 4051:
case 36:
case 1156:
case 4059:
case 575:
case 2656:
case 769:
case 2977:
case 323:
case 2451:
case 3117:
case 1538:
case 1296:
case 2764:
case 1850:
case 1971:
case 331:
case 3165:
case 3433:
case 3416:
case 1192:
case 643:
case 2692:
case 1393:
case 2563:
case 4031:
case 416:
case 71:
case 4039:
case 1136:
case 2787:
case 573:
case 1026:
case 2613:
case 3397:
case 286:
case 2042:
case 1719:
case 1437:
case 1378:
case 1232:
case 194:
case 2821:
case 2765:
case 2894:
case 3453:
case 1445:
case 645:
case 1781:
case 2546:
case 3077:
case 1789:
case 2439:
case 1827:
case 1522:
case 2683:
case 2980:
case 3164:
case 1404:
case 1183:
case 2220:
case 2317:
case 1140:
case 1782:
case 481:
case 2640:
case 1863:
case 161:
case 669:
case 3268:
case 1529:
case 3475:
case 528:
case 782:
case 2245:
case 4032:
case 986:
case 521:
case 1125:
case 600:
case 1778:
case 883:
case 2530:
case 397:
case 1594:
case 2625:
case 3797:
case 1054:
case 743:
case 488:
case 2204:
case 2387:
case 1231:
case 2527:
case 3941:
case 2257:
case 1793:
case 1007:
case 371:
case 1972:
case 3474:
case 2600:
case 2699:
case 2370:
case 207:
case 3066:
case 2691:
case 2624:
case 1595:
case 2090:
case 1259:
case 2001:
case 1124:
case 1251:
case 3308:
case 885:
case 3678:
case 2197:
case 1806:
case 2205:
case 3815:
case 2550:
case 2925:
case 2666:
case 576:
case 1415:
case 4069:
case 3000:
case 1166:
case 914:
case 2516:
case 3788:
case 4061:
case 3406:
case 3295:
case 3107:
case 701:
case 1262:
case 1467:
case 2398:
case 3559:
case 283:
case 1874:
case 2078:
case 708:
case 3155:
case 2643:
case 2735:
case 1860:
case 1485:
case 2012:
case 3379:
case 2461:
case 3371:
case 191:
case 3690:
case 3024:
case 3912:
case 2707:
case 1414:
case 589:
case 3539:
case 3531:
case 910:
case 334:
case 3446:
case 717:
case 2188:
case 415:
case 177:
case 1997:
case 2734:
case 1790:
case 807:
case 1701:
case 1709:
case 3641:
case 2172:
case 1302:
case 2373:
case 1484:
case 1672:
case 566:
case 377:
case 3997:
case 2230:
case 134:
case 2545:
case 946:
case 1446:
case 551:
case 2227:
case 1531:
case 2458:
case 1912:
case 783:
case 3414:
case 441:
case 3672:
case 4022:
case 610:
case 2635:
case 2380:
case 208:
case 3302:
case 3618:
case 742:
case 532:
case 1649:
case 3701:
case 3875:
case 2654:
case 558:
case 1641:
case 3790:
case 2149:
case 2141:
case 1229:
case 1559:
case 2544:
case 2438:
case 785:
case 2896:
case 3467:
case 2505:
case 3166:
case 1000:
case 3415:
case 217:
case 1406:
case 845:
case 1091:
case 167:
case 2109:
case 2828:
case 1379:
case 391:
case 2101:
case 1690:
case 2557:
case 2852:
case 527:
case 1601:
case 2190:
case 1718:
case 614:
case 2703:
case 2097:
case 3342:
case 1772:
case 2655:
case 4038:
case 1460:
case 904:
case 2182:
case 3100:
case 3199:
case 3972:
case 2383:
case 171:
case 2861:
case 679:
case 808:
case 1941:
case 711:
case 1885:
case 1949:
case 3007:
case 2725:
case 178:
case 596:
case 3259:
case 91:
case 2336:
case 1612:
case 3034:
case 3047:
case 3521:
case 2934:
case 3389:
case 1990:
case 459:
case 1268:
case 3782:
case 1884:
case 405:
case 3863:
case 2955:
case 2088:
case 707:
case 900:
case 739:
case 549:
case 1814:
case 2907:
case 2018:
case 1003:
case 3311:
case 3594:
case 1797:
case 3035:
case 2253:
case 3846:
case 3778:
case 3125:
case 3838:
case 834:
case 3624:
case 2562:
case 4074:
case 96:
case 339:
case 1947:
case 2612:
case 54:
case 3244:
case 3001:
case 768:
case 1725:
case 2043:
case 3550:
case 1233:
case 3205:
case 1286:
case 3452:
case 2949:
case 2885:
case 3257:
case 2941:
case 1954:
case 931:
case 761:
case 271:
case 2474:
case 2682:
case 1383:
case 1523:
case 1935:
case 3370:
case 307:
case 2066:
case 3903:
case 826:
case 1072:
case 580:
case 2797:
case 3966:
case 3625:
case 2348:
case 2003:
case 3204:
case 867:
case 3049:
case 2814:
case 830:
case 145:
case 919:
case 1799:
case 925:
case 3943:
case 3317:
case 3640:
case 1088:
case 1193:
case 1934:
case 2693:
case 2909:
case 67:
case 1576:
case 2475:
case 311:
case 2154:
case 1537:
case 791:
case 3118:
case 1832:
case 2221:
case 1149:
case 226:
case 1654:
case 2649:
case 3991:
case 637:
case 492:
case 2982:
case 2135:
case 2463:
case 3707:
case 1458:
case 609:
case 2531:
case 2978:
case 2446:
case 1545:
case 2040:
case 234:
case 473:
case 3188:
case 798:
case 3078:
case 1655:
case 3940:
case 3223:
case 664:
case 3643:
case 622:
case 3735:
case 2718:
case 3586:
case 1852:
case 3754:
case 1557:
case 3326:
case 3012:
case 2609:
case 2690:
case 1101:
case 1634:
case 3469:
case 777:
case 3925:
case 653:
case 267:
case 2091:
case 2788:
case 3533:
case 3516:
case 117:
case 2000:
case 3082:
case 1505:
case 1377:
case 383:
case 2559:
case 1607:
case 3634:
case 291:
case 1461:
case 3109:
case 3828:
case 3190:
case 142:
case 2749:
case 1586:
case 726:
case 42:
case 3852:
case 1326:
case 2342:
case 3097:
case 1643:
case 856:
case 2143:
case 861:
case 2874:
case 1940:
case 1747:
case 868:
case 2467:
case 3438:
case 2262:
case 3377:
case 544:
case 1516:
case 3250:
case 3505:
case 2415:
case 83:
case 298:
case 1666:
case 1925:
case 964:
case 1755:
case 2484:
case 674:
case 2103:
case 450:
case 1603:
case 2302:
case 955:
case 1991:
case 1276:
case 909:
case 3654:
case 69:
case 2709:
case 2618:
case 3149:
case 3537:
case 1734:
case 1118:
case 767:
case 3230:
case 2997:
case 277:
case 3766:
case 465:
case 3227:
case 301:
case 3422:
case 2414:
case 3458:
case 3647:
case 1387:
case 345:
case 1049:
case 1204:
case 2712:
case 23:
case 2035:
case 2311:
case 2594:
case 1625:
case 493:
case 1530:
case 778:
case 2125:
case 625:
case 2846:
case 3072:
case 2047:
case 3392:
case 1365:
case 619:
case 3934:
case 1237:
case 2863:
case 3088:
case 1640:
case 3955:
case 2782:
case 3700:
case 891:
case 2140:
case 3799:
case 1220:
case 1317:
case 3791:
case 1943:
case 1197:
case 2806:
case 990:
case 797:
case 3178:
case 3725:
case 1244:
case 3313:
case 3947:
case 343:
case 877:
case 2259:
case 3112:
case 139:
case 1090:
case 1624:
case 2034:
case 3182:
case 1691:
case 107:
case 1699:
case 3383:
case 1600:
case 2972:
case 3523:
case 382:
case 3954:
case 2793:
case 3926:
case 1506:
case 2979:
case 855:
case 2405:
case 3515:
case 2850:
case 3567:
case 3340:
case 304:
case 3862:
case 1764:
case 725:
case 2444:
case 427:
case 1977:
case 3274:
case 671:
case 1656:
case 31:
case 3687:
case 3998:
case 719:
case 837:
case 3260:
case 3736:
case 4044:
case 2648:
case 587:
case 3585:
case 1002:
case 290:
case 4005:
case 3119:
case 2073:
case 3670:
case 1717:
case 3514:
case 4020:
case 697:
case 432:
case 458:
case 1980:
case 2382:
case 1683:
case 3300:
case 2522:
case 2827:
case 3973:
case 3664:
case 1439:
case 853:
case 1821:
case 4045:
case 2232:
case 1829:
case 2378:
case 1108:
case 2719:
case 548:
case 1042:
case 3275:
case 752:
case 2608:
case 2312:
case 466:
case 1613:
case 1636:
case 2026:
case 1787:
case 2113:
case 2136:
case 3584:
case 864:
case 3079:
case 3324:
case 369:
case 451:
case 1910:
case 3071:
case 1307:
case 1284:
case 890:
case 3263:
case 1677:
case 3429:
case 770:
case 449:
case 1575:
case 110:
case 3366:
case 2070:
case 209:
case 2390:
case 2679:
case 505:
case 2301:
case 1171:
case 3626:
case 4076:
case 1992:
case 3343:
case 3780:
case 1355:
case 634:
case 2017:
case 1285:
case 2269:
case 998:
case 2261:
case 1610:
case 399:
case 2423:
case 1081:
case 1798:
case 1347:
case 1560:
case 2065:
case 1913:
case 3102:
case 1462:
case 3495:
case 1019:
case 1680:
case 3303:
case 667:
case 3851:
case 1726:
case 2349:
case 2087:
case 2833:
case 2816:
case 3936:
case 3347:
case 2092:
case 3560:
case 3610:
case 691:
case 3089:
case 270:
case 2528:
case 4050:
case 435:
case 737:
case 819:
case 547:
case 3285:
case 825:
case 2805:
case 3215:
case 3354:
case 3726:
case 30:
case 2318:
case 1859:
case 3335:
case 457:
case 755:
case 1673:
case 1495:
case 3983:
case 3462:
case 2919:
case 146:
case 2911:
case 1366:
case 310:
case 588:
case 4030:
case 934:
case 2532:
case 764:
case 3868:
case 3956:
case 2198:
case 421:
case 1263:
case 3677:
case 3307:
case 1698:
case 831:
case 3355:
case 2222:
case 1917:
case 3214:
case 2804:
case 2258:
case 1780:
case 823:
case 3179:
case 3992:
case 1626:
case 2036:
case 1246:
case 2989:
case 3334:
case 926:
case 581:
case 1792:
case 3894:
case 3546:
case 2170:
case 3683:
case 3431:
case 1664:
case 3439:
case 1973:
case 3717:
case 1391:
case 3980:
case 169:
case 870:
case 1756:
case 661:
case 3563:
case 1324:
case 656:
case 219:
case 2748:
case 386:
case 3042:
case 2397:
case 1275:
case 1468:
case 489:
case 3821:
case 790:
case 3451:
case 3459:
case 2942:
case 1617:
case 3770:
case 3764:
case 1340:
case 104:
case 2117:
case 2681:
case 2416:
case 2433:
case 3506:
case 971:
case 1926:
case 1189:
case 1111:
case 978:
case 794:
case 3148:
case 4033:
case 1119:
case 2561:
case 1325:
case 2611:
case 252:
case 1585:
case 89:
case 2080:
case 502:
case 476:
case 26:
case 1260:
case 2187:
case 1736:
case 3977:
case 2823:
case 513:
case 11:
case 874:
case 3549:
case 1518:
case 3541:
case 2757:
case 2168:
case 1668:
case 641:
case 915:
case 1877:
case 410:
case 333:
case 3030:
case 2503:
case 3898:
case 3639:
case 1464:
case 3483:
case 3962:
case 1076:
case 1751:
case 1759:
case 3826:
case 1352:
case 1328:
case 913:
case 24:
case 414:
case 1810:
case 1487:
case 3456:
case 1282:
case 2062:
case 2737:
case 1186:
case 1921:
case 2419:
case 3509:
case 578:
case 2411:
case 2489:
case 1332:
case 3492:
case 1133:
case 1116:
case 4019:
case 1417:
case 2704:
case 40:
case 706:
case 3873:
case 1731:
case 3144:
case 1739:
case 3480:
case 2524:
case 1695:
case 3931:
case 3939:
case 3578:
case 3865:
case 1968:
case 3721:
case 530:
case 479:
case 2234:
case 740:
case 2051:
case 3123:
case 603:
case 2314:
case 2591:
case 2255:
case 3322:
case 880:
case 3016:
case 3410:
case 3887:
case 158:
case 2385:
case 981:
case 2630:
case 1020:
case 132:
case 1694:
case 2933:
case 1883:
case 3864:
case 1762:
case 3795:
case 3951:
case 3338:
case 389:
case 2540:
case 3272:
case 1813:
case 2235:
case 78:
case 486:
case 2121:
case 2986:
case 1004:
case 2129:
case 3593:
case 2254:
case 84:
case 2315:
case 1621:
case 3176:
case 988:
case 744:
case 1870:
case 959:
case 1959:
case 3127:
case 3883:
case 3037:
case 1795:
case 3762:
case 2750:
case 2479:
case 3361:
case 2905:
case 3369:
case 332:
case 240:
case 469:
case 3629:
case 3004:
case 366:
case 2676:
case 3813:
case 2203:
case 1477:
case 3045:
case 1272:
case 327:
case 2266:
case 1865:
case 3597:
case 2881:
case 1578:
case 1662:
case 2727:
case 3695:
case 1931:
case 1939:
case 1086:
case 647:
case 2904:
case 2162:
case 1016:
case 1322:
case 3005:
case 1410:
case 1123:
case 28:
case 2920:
case 3209:
case 3044:
case 3201:
case 2819:
case 716:
case 244:
case 41:
case 1721:
case 396:
case 1501:
case 1157:
case 1768:
case 3929:
case 3186:
case 987:
case 499:
case 3487:
case 3810:
case 2555:
case 3282:
case 2299:
case 3731:
case 2224:
case 2802:
case 3880:
case 2644:
case 1651:
case 602:
case 3994:
case 2375:
case 1297:
case 3465:
case 3133:
case 3116:
case 1492:
case 4048:
case 2605:
case 3332:
case 3023:
case 1030:
case 2535:
case 1898:
case 74:
case 53:
case 1120:
case 349:
case 3877:
case 3396:
case 2923:
case 2240:
case 844:
case 948:
case 88:
case 2786:
case 1137:
case 1549:
case 568:
case 3588:
case 2733:
case 2716:
case 3328:
case 3153:
case 556:
case 1145:
case 941:
case 2225:
case 3352:
case 2139:
case 206:
case 2842:
case 2131:
case 3759:
case 3470:
case 2604:
case 1639:
case 1962:
case 2374:
case 3995:
case 1483:
case 2021:
case 1046:
case 812:
case 906:
case 680:
case 1440:
case 2598:
case 803:
case 2236:
case 2213:
case 1835:
case 2760:
case 3752:
case 3014:
case 2132:
case 2849:
case 2985:
case 3728:
case 2316:
case 2333:
case 1632:
case 248:
case 1425:
case 2386:
case 3579:
case 3084:
case 2915:
case 365:
case 173:
case 1542:
case 1834:
case 2890:
case 3067:
case 2152:
case 1628:
case 859:
case 2801:
case 2128:
case 32:
case 3843:
case 3339:
case 3160:
case 3015:
case 1400:
case 684:
case 2914:
case 363:
case 1502:
case 3:
case 417:
case 1424:
case 175:
case 1368:
case 3281:
case 3866:
case 2292:
case 2746:
case 1589:
case 1321:
case 2615:
case 1329:
case 443:
case 2565:
case 136:
case 3106:
case 3407:
case 2517:
case 2812:
case 3202:
case 3638:
case 98:
case 395:
case 3824:
case 15:
case 553:
case 3899:
case 3800:
case 2587:
case 3455:
case 2327:
case 1661:
case 1185:
case 781:
case 124:
case 1932:
case 3548:
case 2161:
case 1519:
case 203:
case 2330:
case 1394:
case 3622:
case 2564:
case 1996:
case 1114:
case 3658:
case 2570:
case 393:
case 940:
case 3146:
case 747:
case 1279:
case 2488:
case 2706:
case 445:
case 2418:
case 3508:
case 372:
case 1952:
case 3454:
case 1928:
case 1395:
case 2277:
case 259:
case 2684:
case 616:
case 555:
case 3435:
case 3163:
case 1403:
case 1184:
case 574:
case 2646:
case 1825:
case 288:
case 1146:
case 1447:
case 2122:
case 1658:
case 193:
case 2158:
case 2767:
case 2032:
case 418:
case 3114:
case 2583:
case 1163:
case 1435:
case 411:
case 2298:
case 2536:
case 3403:
case 1362:
case 640:
case 3395:
case 3928:
case 1769:
case 281:
case 1761:
case 1508:
case 703:
case 1454:
case 2028:
case 1824:
case 3722:
case 195:
case 2714:
case 1407:
case 3167:
case 3758:
case 1202:
case 4001:
case 3466:
case 247:
case 2592:
case 2897:
case 1106:
case 4009:
case 3589:
case 4090:
case 439:
case 3329:
case 3581:
case 1548:
case 3511:
case 3394:
case 2401:
case 3932:
case 705:
case 2096:
case 2490:
case 1434:
case 644:
case 35:
case 3443:
case 3006:
case 2287:
case 3400:
case 1015:
case 2963:
case 3499:
case 4012:
case 2304:
case 1067:
case 2345:
case 741:
case 4078:
case 984:
case 2265:
case 2478:
case 1281:
case 3368:
case 213:
case 94:
case 1922:
case 375:
case 888:
case 202:
case 2217:
case 1085:
case 56:
case 1175:
case 2305:
case 1728:
case 3969:
case 3632:
case 392:
case 1752:
case 3854:
case 2675:
case 2493:
case 2344:
case 3835:
case 1351:
case 3046:
case 3847:
case 847:
case 519:
case 165:
case 1796:
case 1084:
case 485:
case 2888:
case 1571:
case 2357:
case 3425:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1767733202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,];
var gg_b = "1767733202/";

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
