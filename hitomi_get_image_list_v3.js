// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 672:
case 1240:
case 342:
case 1735:
case 3540:
case 762:
case 2856:
case 1012:
case 2979:
case 1266:
case 3949:
case 2564:
case 2387:
case 2203:
case 1395:
case 320:
case 1054:
case 2085:
case 3478:
case 2501:
case 543:
case 2574:
case 2545:
case 3589:
case 24:
case 2688:
case 601:
case 455:
case 1762:
case 791:
case 2971:
case 893:
case 1038:
case 1231:
case 61:
case 1857:
case 3956:
case 1954:
case 2506:
case 3338:
case 819:
case 1699:
case 1815:
case 2050:
case 362:
case 835:
case 2158:
case 1918:
case 3583:
case 809:
case 3542:
case 2975:
case 3303:
case 2996:
case 1504:
case 3250:
case 2403:
case 1741:
case 77:
case 1179:
case 2292:
case 866:
case 3227:
case 913:
case 763:
case 1484:
case 1599:
case 2111:
case 2251:
case 3765:
case 667:
case 2031:
case 234:
case 13:
case 469:
case 3660:
case 112:
case 3157:
case 950:
case 1397:
case 3886:
case 1944:
case 2756:
case 1299:
case 1436:
case 1275:
case 3707:
case 3746:
case 1940:
case 3046:
case 825:
case 1781:
case 3296:
case 3254:
case 2005:
case 3926:
case 608:
case 1705:
case 838:
case 3938:
case 3620:
case 4063:
case 1485:
case 1818:
case 449:
case 1789:
case 292:
case 130:
case 286:
case 3923:
case 2521:
case 2359:
case 1584:
case 3468:
case 884:
case 3757:
case 446:
case 477:
case 1627:
case 739:
case 63:
case 659:
case 1670:
case 196:
case 2608:
case 225:
case 631:
case 1272:
case 3380:
case 2424:
case 1398:
case 2767:
case 420:
case 3828:
case 4020:
case 1104:
case 1728:
case 933:
case 2002:
case 2106:
case 1945:
case 20:
case 2484:
case 1630:
case 740:
case 2904:
case 3346:
case 3508:
case 1757:
case 915:
case 3222:
case 979:
case 1063:
case 3932:
case 1826:
case 3633:
case 412:
case 2982:
case 1714:
case 1755:
case 3369:
case 1454:
case 194:
case 1631:
case 2201:
case 3627:
case 576:
case 3706:
case 205:
case 144:
case 2257:
case 2084:
case 1410:
case 3319:
case 3719:
case 2279:
case 2927:
case 1166:
case 883:
case 2614:
case 419:
case 4087:
case 569:
case 973:
case 1882:
case 57:
case 1294:
case 4072:
case 32:
case 60:
case 4021:
case 3998:
case 1654:
case 434:
case 67:
case 3668:
case 3615:
case 2463:
case 980:
case 1698:
case 2980:
case 3500:
case 3709:
case 325:
case 1702:
case 3969:
case 1858:
case 96:
case 1387:
case 1960:
case 414:
case 3315:
case 3699:
case 1501:
case 1726:
case 206:
case 4032:
case 1982:
case 3622:
case 18:
case 1142:
case 337:
case 163:
case 1622:
case 1792:
case 1421:
case 1917:
case 2839:
case 1419:
case 2225:
case 55:
case 822:
case 869:
case 128:
case 3005:
case 2782:
case 577:
case 2734:
case 1503:
case 2107:
case 3087:
case 1620:
case 3528:
case 3510:
case 1861:
case 149:
case 2175:
case 3282:
case 427:
case 1524:
case 1094:
case 28:
case 3120:
case 1181:
case 1372:
case 3446:
case 2663:
case 2377:
case 1321:
case 183:
case 2546:
case 1829:
case 2813:
case 3839:
case 1786:
case 3019:
case 1597:
case 329:
case 148:
case 3869:
case 167:
case 283:
case 1672:
case 497:
case 3138:
case 4082:
case 1408:
case 2263:
case 968:
case 2392:
case 991:
case 115:
case 2159:
case 2712:
case 3098:
case 359:
case 1059:
case 952:
case 3805:
case 2995:
case 986:
case 3088:
case 3489:
case 905:
case 2753:
case 1559:
case 351:
case 2862:
case 1953:
case 675:
case 1523:
case 2496:
case 1325:
case 1399:
case 3572:
case 1893:
case 805:
case 661:
case 3387:
case 2151:
case 1989:
case 3395:
case 172:
case 2485:
case 2882:
case 2316:
case 2411:
case 2480:
case 39:
case 1737:
case 3342:
case 2330:
case 2513:
case 3218:
case 2462:
case 464:
case 2695:
case 2343:
case 1232:
case 1342:
case 319:
case 2053:
case 3663:
case 2540:
case 604:
case 1889:
case 3594:
case 1592:
case 3659:
case 2638:
case 4092:
case 482:
case 2794:
case 2579:
case 3682:
case 1180:
case 2185:
case 765:
case 2935:
case 817:
case 1678:
case 2378:
case 747:
case 2465:
case 3316:
case 114:
case 512:
case 1049:
case 2478:
case 1007:
case 613:
case 1088:
case 3835:
case 492:
case 90:
case 2444:
case 2239:
case 299:
case 127:
case 727:
case 1550:
case 1686:
case 2273:
case 1759:
case 4064:
case 2052:
case 2954:
case 2771:
case 3962:
case 3058:
case 2808:
case 1329:
case 649:
case 1169:
case 1446:
case 2612:
case 2227:
case 2611:
case 3083:
case 862:
case 1351:
case 1773:
case 1009:
case 662:
case 565:
case 3579:
case 1638:
case 7:
case 3958:
case 867:
case 3356:
case 2841:
case 1271:
case 2054:
case 117:
case 1937:
case 3441:
case 437:
case 382:
case 1149:
case 1348:
case 1498:
case 1341:
case 526:
case 734:
case 3793:
case 1760:
case 182:
case 2313:
case 515:
case 3546:
case 2409:
case 1464:
case 2664:
case 2259:
case 4055:
case 1488:
case 1432:
case 3532:
case 2968:
case 1844:
case 522:
case 572:
case 830:
case 307:
case 729:
case 2306:
case 1102:
case 2007:
case 3472:
case 971:
case 2400:
case 1791:
case 4043:
case 1992:
case 1509:
case 2983:
case 873:
case 1715:
case 4025:
case 2683:
case 2649:
case 1710:
case 3766:
case 3901:
case 508:
case 1959:
case 1674:
case 2138:
case 1288:
case 2300:
case 2241:
case 2628:
case 1532:
case 3079:
case 1295:
case 1443:
case 3892:
case 1964:
case 716:
case 2199:
case 751:
case 707:
case 2116:
case 4031:
case 1423:
case 2925:
case 2063:
case 1437:
case 3031:
case 4007:
case 3602:
case 2538:
case 247:
case 42:
case 1872:
case 181:
case 1320:
case 3950:
case 4039:
case 3334:
case 2035:
case 3294:
case 620:
case 441:
case 1047:
case 841:
case 1877:
case 3107:
case 2766:
case 2851:
case 2333:
case 669:
case 1653:
case 2370:
case 2065:
case 914:
case 2420:
case 3996:
case 1291:
case 139:
case 651:
case 1788:
case 548:
case 1203:
case 2507:
case 1221:
case 3068:
case 2678:
case 837:
case 3432:
case 549:
case 1667:
case 3374:
case 3899:
case 3772:
case 3343:
case 3977:
case 3780:
case 694:
case 3918:
case 3795:
case 3251:
case 962:
case 401:
case 1556:
case 1579:
case 926:
case 1731:
case 1812:
case 3247:
case 2632:
case 2728:
case 2178:
case 485:
case 3752:
case 3763:
case 4051:
case 2902:
case 1338:
case 777:
case 1688:
case 1936:
case 2764:
case 2130:
case 278:
case 2750:
case 3522:
case 4029:
case 2514:
case 1663:
case 1539:
case 2483:
case 983:
case 3477:
case 686:
case 3590:
case 3376:
case 1763:
case 3199:
case 379:
case 1920:
case 2261:
case 3394:
case 1222:
case 4088:
case 1969:
case 2324:
case 787:
case 1280:
case 1324:
case 2620:
case 1305:
case 1543:
case 1277:
case 2702:
case 421:
case 1810:
case 2308:
case 157:
case 1132:
case 1011:
case 3102:
case 2004:
case 1101:
case 226:
case 2799:
case 2528:
case 917:
case 1389:
case 1126:
case 2872:
case 3669:
case 1891:
case 2228:
case 3093:
case 2135:
case 2803:
case 452:
case 2110:
case 3118:
case 540:
case 3558:
case 3582:
case 2439:
case 3819:
case 3045:
case 2059:
case 81:
case 3181:
case 903:
case 2450:
case 493:
case 1629:
case 3845:
case 1500:
case 3127:
case 1830:
case 939:
case 2045:
case 544:
case 465:
case 656:
case 89:
case 625:
case 836:
case 87:
case 3372:
case 190:
case 175:
case 644:
case 3761:
case 3221:
case 2717:
case 3452:
case 1337:
case 1972:
case 1251:
case 2617:
case 3981:
case 2610:
case 2908:
case 2551:
case 1453:
case 180:
case 3811:
case 2221:
case 2039:
case 1065:
case 3151:
case 3877:
case 2722:
case 444:
case 1447:
case 3492:
case 1293:
case 1316:
case 3641:
case 2134:
case 1115:
case 289:
case 1070:
case 1613:
case 418:
case 2627:
case 1335:
case 2852:
case 3370:
case 3818:
case 826:
case 3445:
case 902:
case 4027:
case 3209:
case 3313:
case 2433:
case 2626:
case 3809:
case 2321:
case 1693:
case 3735:
case 3035:
case 268:
case 766:
case 1394:
case 2858:
case 49:
case 1547:
case 1864:
case 3023:
case 82:
case 2253:
case 3608:
case 3480:
case 3239:
case 3404:
case 3170:
case 3703:
case 132:
case 605:
case 808:
case 3556:
case 3591:
case 3006:
case 3304:
case 3942:
case 290:
case 1445:
case 3848:
case 3610:
case 1855:
case 1926:
case 3908:
case 460:
case 3200:
case 3951:
case 0:
case 123:
case 4046:
case 1055:
case 1724:
case 2793:
case 683:
case 72:
case 463:
case 3454:
case 4077:
case 2277:
case 3648:
case 1274:
case 3371:
case 3236:
case 2461:
case 2783:
case 997:
case 3804:
case 3895:
case 2558:
case 3382:
case 4093:
case 3039:
case 1236:
case 851:
case 94:
case 310:
case 785:
case 1427:
case 1336:
case 2023:
case 4017:
case 3524:
case 3248:
case 4030:
case 2560:
case 2470:
case 3229:
case 1025:
case 1213:
case 85:
case 1772:
case 1450:
case 3260:
case 4038:
case 598:
case 1223:
case 3423:
case 1370:
case 2374:
case 3723:
case 2556:
case 228:
case 1202:
case 3503:
case 1566:
case 850:
case 2984:
case 2431:
case 99:
case 3053:
case 2641:
case 1093:
case 3976:
case 2527:
case 3182:
case 240:
case 1220:
case 2544:
case 147:
case 2446:
case 2890:
case 2211:
case 501:
case 778:
case 1560:
case 1120:
case 886:
case 2959:
case 2903:
case 1113:
case 3386:
case 1601:
case 575:
case 2315:
case 22:
case 3407:
case 2947:
case 4080:
case 309:
case 595:
case 570:
case 2684:
case 1260:
case 1968:
case 2325:
case 2666:
case 3957:
case 1793:
case 1307:
case 479:
case 3101:
case 3721:
case 440:
case 1127:
case 2136:
case 1525:
case 1061:
case 354:
case 1551:
case 3603:
case 333:
case 494:
case 3430:
case 3185:
case 4040:
case 3352:
case 3946:
case 4026:
case 696:
case 3080:
case 1883:
case 62:
case 3028:
case 3269:
case 1111:
case 930:
case 1935:
case 3941:
case 3243:
case 2961:
case 2832:
case 590:
case 2060:
case 161:
case 638:
case 1534:
case 202:
case 2331:
case 4018:
case 1677:
case 3003:
case 2835:
case 2457:
case 1459:
case 1193:
case 423:
case 880:
case 581:
case 1999:
case 1170:
case 1700:
case 3004:
case 1385:
case 199:
case 853:
case 3971:
case 409:
case 1129:
case 397:
case 859:
case 2346:
case 174:
case 3756:
case 1359:
case 877:
case 26:
case 2215:
case 224:
case 2034:
case 1683:
case 1300:
case 313:
case 937:
case 1349:
case 1764:
case 899:
case 3142:
case 3154:
case 3724:
case 295:
case 3095:
case 3306:
case 3358:
case 2957:
case 695:
case 3847:
case 843:
case 992:
case 1161:
case 222:
case 367:
case 682:
case 3775:
case 3676:
case 3871:
case 3054:
case 541:
case 538:
case 4068:
case 3416:
case 1602:
case 2299:
case 2537:
case 1867:
case 553:
case 981:
case 2720:
case 213:
case 3748:
case 58:
case 1800:
case 3700:
case 3424:
case 4078:
case 2492:
case 1413:
case 872:
case 2252:
case 2329:
case 394:
case 3595:
case 2797:
case 1172:
case 712:
case 1796:
case 2549:
case 586:
case 2866:
case 891:
case 928:
case 1981:
case 1549:
case 832:
case 1250:
case 1837:
case 2818:
case 4054:
case 916:
case 3215:
case 1361:
case 1697:
case 3165:
case 458:
case 2886:
case 347:
case 3978:
case 3147:
case 1442:
case 994:
case 2448:
case 2575:
case 1006:
case 1451:
case 2752:
case 1946:
case 3412:
case 3451:
case 1177:
case 4035:
case 855:
case 3271:
case 2301:
case 2914:
case 2719:
case 3385:
case 2155:
case 3623:
case 588:
case 2061:
case 3787:
case 2643:
case 3002:
case 1052:
case 1947:
case 498:
case 1603:
case 1154:
case 3312:
case 2454:
case 279:
case 2565:
case 4052:
case 3261:
case 218:
case 2586:
case 3223:
case 3311:
case 1608:
case 3491:
case 701:
case 3563:
case 2681:
case 1173:
case 2071:
case 3968:
case 3094:
case 405:
case 3000:
case 955:
case 3552:
case 2022:
case 741:
case 1008:
case 1831:
case 1512:
case 3924:
case 3493:
case 3121:
case 3687:
case 3658:
case 3180:
case 2396:
case 3537:
case 1304:
case 798:
case 3799:
case 2233:
case 1254:
case 1644:
case 2523:
case 852:
case 1995:
case 1036:
case 3474:
case 3379:
case 293:
case 2342:
case 3437:
case 551:
case 1024:
case 3758:
case 4071:
case 1833:
case 3569:
case 2577:
case 1845:
case 527:
case 698:
case 1098:
case 3717:
case 2222:
case 122:
case 2026:
case 3560:
case 2469:
case 3634:
case 1987:
case 3655:
case 591:
case 1314:
case 1290:
case 2355:
case 3842:
case 2074:
case 1621:
case 3621:
case 3397:
case 270:
case 627:
case 3396:
case 3928:
case 2336:
case 2748:
case 1021:
case 3876:
case 3116:
case 393:
case 2477:
case 1675:
case 1110:
case 3318:
case 435:
case 3173:
case 2219:
case 1339:
case 3134:
case 214:
case 2554:
case 235:
case 330:
case 829:
case 1884:
case 3680:
case 3523:
case 2125:
case 1128:
case 184:
case 4045:
case 1192:
case 3841:
case 3742:
case 3256:
case 1856:
case 3650:
case 3076:
case 2237:
case 2786:
case 2889:
case 1847:
case 3649:
case 3042:
case 3168:
case 3851:
case 3966:
case 2209:
case 3263:
case 1838:
case 889:
case 3420:
case 1910:
case 1044:
case 3896:
case 229:
case 619:
case 2746:
case 657:
case 931:
case 249:
case 2097:
case 1878:
case 1904:
case 2139:
case 462:
case 233:
case 1273:
case 311:
case 583:
case 2281:
case 1071:
case 256:
case 1988:
case 2809:
case 3249:
case 3166:
case 285:
case 1089:
case 1472:
case 2589:
case 2796:
case 2437:
case 2103:
case 2382:
case 1996:
case 895:
case 2297:
case 1619:
case 1732:
case 3943:
case 3135:
case 2781:
case 1615:
case 2042:
case 287:
case 56:
case 3179:
case 3519:
case 833:
case 1865:
case 1869:
case 2956:
case 532:
case 2193:
case 3789:
case 1099:
case 1593:
case 894:
case 3628:
case 1993:
case 1263:
case 2917:
case 126:
case 3389:
case 3217:
case 1196:
case 2105:
case 1496:
case 3060:
case 680:
case 1234:
case 66:
case 152:
case 1956:
case 1200:
case 1843:
case 2157:
case 561:
case 3061:
case 428:
case 3803:
case 2088:
case 116:
case 2978:
case 2101:
case 3240:
case 505:
case 2217:
case 2192:
case 1185:
case 2017:
case 711:
case 3960:
case 705:
case 996:
case 2623:
case 629:
case 1474:
case 2622:
case 106:
case 1326:
case 2390:
case 1067:
case 1894:
case 3344:
case 257:
case 2848:
case 1151:
case 179:
case 159:
case 3865:
case 2883:
case 1881:
case 794:
case 2847:
case 2950:
case 14:
case 3521:
case 4044:
case 1905:
case 3614:
case 919:
case 1247:
case 1502:
case 1540:
case 793:
case 3144:
case 3280:
case 2401:
case 3487:
case 3015:
case 3933:
case 2096:
case 1617:
case 3832:
case 3290:
case 1186:
case 475:
case 735:
case 2468:
case 383:
case 3297:
case 413:
case 2675:
case 318:
case 876:
case 1703:
case 1985:
case 2089:
case 688:
case 326:
case 2807:
case 2402:
case 1533:
case 3421:
case 3642:
case 2167:
case 1004:
case 3859:
case 1692:
case 8:
case 3444:
case 2283:
case 176:
case 985:
case 459:
case 239:
case 1123:
case 2497:
case 2792:
case 3935:
case 1519:
case 2812:
case 1754:
case 2738:
case 93:
case 923:
case 48:
case 2568:
case 4086:
case 3599:
case 3600:
case 628:
case 1056:
case 885:
case 1870:
case 3274:
case 2915:
case 2737:
case 2095:
case 16:
case 3043:
case 2131:
case 3714:
case 2473:
case 3889:
case 2625:
case 719:
case 2011:
case 37:
case 3930:
case 2899:
case 2932:
case 3321:
case 2860:
case 2784:
case 2895:
case 1659:
case 970:
case 3619:
case 3872:
case 954:
case 664:
case 343:
case 408:
case 490:
case 1477:
case 2066:
case 2896:
case 703:
case 1233:
case 1430:
case 3626:
case 2936:
case 2615:
case 3149:
case 2471:
case 3264:
case 912:
case 3911:
case 3298:
case 168:
case 296:
case 384:
case 355:
case 1279:
case 1684:
case 3262:
case 2256:
case 2208:
case 3171:
case 3632:
case 1758:
case 3536:
case 3089:
case 800:
case 1347:
case 1298:
case 589:
case 3470:
case 578:
case 3106:
case 3654:
case 2930:
case 2230:
case 3001:
case 1651:
case 3759:
case 909:
case 366:
case 681:
case 3067:
case 1010:
case 1031:
case 1522:
case 3730:
case 2859:
case 546:
case 1022:
case 3172:
case 2636:
case 4074:
case 1607:
case 1738:
case 3643:
case 280:
case 511:
case 500:
case 2922:
case 1769:
case 145:
case 1641:
case 1327:
case 3032:
case 2122:
case 792:
case 2013:
case 3551:
case 335:
case 519:
case 3201:
case 1258:
case 1069:
case 3651:
case 2493:
case 3505:
case 1739:
case 3674:
case 1756:
case 3363:
case 2288:
case 3737:
case 1296:
case 2247:
case 1409:
case 860:
case 2836:
case 3231:
case 1435:
case 4094:
case 1495:
case 2916:
case 1403:
case 2937:
case 1062:
case 4016:
case 178:
case 1866:
case 1356:
case 3675:
case 3833:
case 3009:
case 2369:
case 2232:
case 1527:
case 19:
case 666:
case 195:
case 3299:
case 1561:
case 1690:
case 3913:
case 582:
case 2754:
case 1382:
case 1562:
case 158:
case 2953:
case 1322:
case 3527:
case 2265:
case 2845:
case 587:
case 1289:
case 771:
case 3224:
case 813:
case 1282:
case 3820:
case 98:
case 447:
case 3830:
case 1176:
case 3815:
case 1057:
case 1163:
case 2044:
case 3592:
case 3293:
case 2258:
case 927:
case 2779:
case 3384:
case 2115:
case 2685:
case 3070:
case 2960:
case 1911:
case 2499:
case 1444:
case 197:
case 692:
case 2868:
case 2532:
case 3241:
case 3074:
case 3961:
case 102:
case 3931:
case 2580:
case 1352:
case 1303:
case 2912:
case 2662:
case 2576:
case 3114:
case 1879:
case 1979:
case 3460:
case 1315:
case 753:
case 3288:
case 3967:
case 2810:
case 65:
case 506:
case 878:
case 2394:
case 204:
case 3878:
case 2745:
case 4091:
case 1850:
case 2931:
case 3638:
case 68:
case 2108:
case 700:
case 3143:
case 3834:
case 2539:
case 410:
case 4056:
case 1261:
case 3365:
case 2849:
case 999:
case 2923:
case 567:
case 2132:
case 1491:
case 1050:
case 2172:
case 2367:
case 258:
case 844:
case 1709:
case 2349:
case 120:
case 3488:
case 3273:
case 3289:
case 3219:
case 3277:
case 882:
case 9:
case 2379:
case 2488:
case 2805:
case 615:
case 2951:
case 965:
case 3065:
case 424:
case 617:
case 1825:
case 4014:
case 3739:
case 2749:
case 1037:
case 3253:
case 1807:
case 1955:
case 2364:
case 1414:
case 3434:
case 341:
case 2303:
case 3130:
case 1378:
case 2195:
case 1790:
case 3196:
case 1588:
case 2177:
case 1405:
case 2762:
case 574:
case 1499:
case 823:
case 78:
case 324:
case 3320:
case 215:
case 1994:
case 1466:
case 261:
case 1776:
case 3995:
case 1096:
case 1725:
case 2213:
case 2429:
case 1462:
case 2186:
case 3205:
case 1840:
case 2150:
case 2828:
case 1716:
case 2795:
case 1191:
case 3457:
case 3497:
case 3099:
case 1162:
case 2814:
case 2028:
case 1086:
case 294:
case 2049:
case 3743:
case 718:
case 1481:
case 1041:
case 2371:
case 4053:
case 4062:
case 1572:
case 1949:
case 4095:
case 3994:
case 2522:
case 3377:
case 1122:
case 3328:
case 1028:
case 1895:
case 2235:
case 3753:
case 3570:
case 301:
case 3097:
case 531:
case 963:
case 3225:
case 3378:
case 2077:
case 2410:
case 555:
case 1564:
case 624:
case 3198:
case 2536:
case 1355:
case 321:
case 131:
case 1589:
case 3422:
case 3155:
case 1616:
case 188:
case 3204:
case 404:
case 1966:
case 563:
case 3934:
case 827:
case 679:
case 1392:
case 3494:
case 2864:
case 2212:
case 304:
case 4075:
case 3744:
case 2328:
case 3284:
case 3233:
case 3228:
case 3694:
case 2658:
case 3644:
case 3991:
case 2776:
case 2821:
case 2999:
case 156:
case 3047:
case 2278:
case 1922:
case 3630:
case 1635:
case 2642:
case 1018:
case 795:
case 1148:
case 264:
case 1138:
case 3567:
case 3571:
case 3339:
case 3580:
case 750:
case 922:
case 1085:
case 1239:
case 3442:
case 2997:
case 1581:
case 3351:
case 2548:
case 1694:
case 387:
case 520:
case 1541:
case 2229:
case 1125:
case 2304:
case 3914:
case 331:
case 858:
case 2596:
case 2765:
case 334:
case 949:
case 1206:
case 2991:
case 3359:
case 1117:
case 137:
case 1528:
case 3295:
case 4028:
case 1216:
case 2759:
case 2963:
case 3593:
case 2893:
case 3667:
case 704:
case 3455:
case 948:
case 466:
case 1913:
case 3541:
case 690:
case 2356:
case 1016:
case 811:
case 1490:
case 1310:
case 2926:
case 361:
case 2344:
case 1687:
case 4079:
case 3974:
case 3132:
case 1508:
case 266:
case 1483:
case 484:
case 774:
case 3566:
case 768:
case 3331:
case 3890:
case 708:
case 2171:
case 1053:
case 3139:
case 3801:
case 2707:
case 245:
case 3064:
case 252:
case 360:
case 2372:
case 371:
case 2126:
case 3856:
case 3973:
case 3050:
case 2338:
case 118:
case 810:
case 779:
case 3021:
case 2231:
case 3782:
case 2182:
case 3189:
case 3596:
case 431:
case 3025:
case 3126:
case 2742:
case 3072:
case 372:
case 3124:
case 2080:
case 407:
case 1717:
case 932:
case 940:
case 4023:
case 481:
case 2667:
case 166:
case 3436:
case 193:
case 3806:
case 221:
case 557:
case 2906:
case 1245:
case 618:
case 254:
case 2593:
case 1521:
case 3568:
case 2351:
case 2270:
case 550:
case 1516:
case 2888:
case 4000:
case 403:
case 2249:
case 1297:
case 2169:
case 2143:
case 3426:
case 1510:
case 1003:
case 1921:
case 1798:
case 23:
case 3498:
case 288:
case 720:
case 911:
case 3399:
case 2987:
case 253:
case 47:
case 472:
case 3048:
case 636:
case 3745:
case 108:
case 1794:
case 2806:
case 2629:
case 2145:
case 3900:
case 80:
case 3983:
case 1121:
case 2347:
case 1801:
case 3265:
case 2946:
case 573:
case 2014:
case 1079:
case 373:
case 73:
case 1286:
case 3448:
case 1184:
case 925:
case 964:
case 3858:
case 3555:
case 242:
case 1571:
case 3887:
case 2274:
case 2285:
case 3469:
case 1887:
case 2024:
case 4065:
case 2735:
case 2790:
case 1565:
case 1330:
case 1939:
case 642:
case 2029:
case 312:
case 1650:
case 2585:
case 1381:
case 3073:
case 1924:
case 2630:
case 255:
case 298:
case 3062:
case 4036:
case 1770:
case 2758:
case 3104:
case 3057:
case 392:
case 2459:
case 1023:
case 4006:
case 300:
case 2791:
case 1892:
case 4059:
case 1610:
case 1480:
case 1402:
case 443:
case 3238:
case 2220:
case 502:
case 907:
case 3697:
case 1367:
case 2553:
case 1073:
case 693:
case 2388:
case 1190:
case 3893:
case 1390:
case 2334:
case 3726:
case 1974:
case 1554:
case 2170:
case 3495:
case 684:
case 2092:
case 535:
case 2057:
case 1391:
case 1874:
case 2149:
case 1215:
case 2102:
case 2529:
case 1470:
case 1035:
case 3408:
case 3561:
case 1912:
case 3866:
case 2661:
case 3266:
case 3278:
case 1217:
case 1257:
case 1530:
case 369:
case 2739:
case 1890:
case 2353:
case 2416:
case 1197:
case 1358:
case 2508:
case 3565:
case 3604:
case 3549:
case 1013:
case 345:
case 3653:
case 936:
case 2594:
case 2006:
case 1784:
case 425:
case 732:
case 2850:
case 1270:
case 1914:
case 3937:
case 1998:
case 944:
case 3146:
case 79:
case 277:
case 3662:
case 3427:
case 417:
case 1553:
case 322:
case 402:
case 2733:
case 3119:
case 2275:
case 2701:
case 1227:
case 1042:
case 111:
case 2064:
case 1689:
case 265:
case 3092:
case 3033:
case 2800:
case 210:
case 1157:
case 1785:
case 422:
case 1001:
case 2449:
case 1072:
case 1899:
case 1676:
case 3391:
case 975:
case 1751:
case 2503:
case 3673:
case 967:
case 3940:
case 4081:
case 17:
case 754:
case 2291:
case 2944:
case 898:
case 2078:
case 3813:
case 1803:
case 1026:
case 1210:
case 378:
case 2515:
case 2406:
case 2083:
case 2144:
case 1557:
case 2414:
case 1494:
case 3762:
case 509:
case 3785:
case 2651:
case 797:
case 1278:
case 4041:
case 4067:
case 3712:
case 2500:
case 3902:
case 3751:
case 1416:
case 1438:
case 396:
case 2671:
case 713:
case 2505:
case 542:
case 821:
case 966:
case 1915:
case 1486:
case 3307:
case 211:
case 2607:
case 3332:
case 2322:
case 594:
case 29:
case 3945:
case 1950:
case 439:
case 1577:
case 3195:
case 3361:
case 3646:
case 3836:
case 281:
case 2181:
case 2207:
case 340:
case 3733:
case 2118:
case 2255:
case 2123:
case 2854:
case 3255:
case 3268:
case 2309:
case 3109:
case 3550:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1643947202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,];
var gg_b = "1643947202/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
